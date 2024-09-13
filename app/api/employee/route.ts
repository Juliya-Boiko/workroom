/* eslint-disable @typescript-eslint/no-explicit-any */
import User from '@/models/user';
import { decode } from '@/libs/jwt';
import { connectToMongoDB } from '@/libs/database';
import { EUserPosition, initialTasksCounts, TaskCountsType, ETaskStatus } from '@/typings';
import { NextRequest, NextResponse } from 'next/server';

connectToMongoDB();

interface Task {
  status: ETaskStatus;
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('workroom')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Token null or expired' }, { status: 403 });
    }
    const { id, companyId } = await decode(token);
    if (!id || !companyId) {
      return NextResponse.json({ message: 'Find user error' }, { status: 400 });
    }
    const employees = await User.find({
      companyId,
      position: EUserPosition.EMPLOYEE,
    })
      .select('-companyId -createdAt -updatedAt -password')
      .populate({
        path: 'tasks',
        match: { assignee: { $exists: true } },
        select: 'status -_id -assignee',
      })
      .lean();
    const employeesWithTaskCounts = employees.map((employee) => {
      const tasks = employee.tasks.reduce(
        (acc: TaskCountsType, task: Task) => {
          acc[task.status] = (acc[task.status] || 0) + 1;
          return acc;
        },
        { ...initialTasksCounts }
      );

      return {
        ...employee,
        tasks,
      };
    });
    return NextResponse.json(employeesWithTaskCounts, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
