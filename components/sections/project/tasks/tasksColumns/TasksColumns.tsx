'use client';
import styles from './tasksColumns.module.scss';
import { useState, useEffect } from 'react';
import { useTasksMutation } from '@/services';
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';
import { ETaskStatus, ITask } from '@/typings';
import { DragCard } from '@/components/cards/drag/DragCard';

interface Props {
  tasks: ITask[];
  loading: boolean;
}

type GroupedTasks = {
  [key in ETaskStatus]: ITask[];
};

const groupTasksByStatus = (tasks: ITask[]): GroupedTasks => {
  const initialGroupedTasks: GroupedTasks = {
    [ETaskStatus.TODO]: [],
    [ETaskStatus.INPROGRESS]: [],
    [ETaskStatus.DONE]: [],
  };

  return tasks.reduce((acc: GroupedTasks, task: ITask) => {
    acc[task.status].push(task);
    return acc;
  }, initialGroupedTasks);
};

export const TasksColumns = ({ tasks, loading }: Props) => {
  const { update, isUpdating } = useTasksMutation();
  const [groupedTasks, setGroupedTasks] = useState<GroupedTasks>(groupTasksByStatus(tasks));

  useEffect(() => {
    setGroupedTasks(groupTasksByStatus(tasks));
  }, [tasks]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return;

    const draggedTask = groupedTasks[source.droppableId as ETaskStatus][source.index];

    const updatedTasks = { ...groupedTasks };

    updatedTasks[source.droppableId as ETaskStatus].splice(source.index, 1);

    updatedTasks[destination.droppableId as ETaskStatus].splice(destination.index, 0, {
      ...draggedTask,
      status: destination.droppableId as ETaskStatus,
    });

    setGroupedTasks(updatedTasks);

    const data = {
      _id: draggableId,
      update: {
        status: destination.droppableId as ETaskStatus,
      },
    };

    update(data);
  };

  const showLoader = loading || isUpdating;

  const columnsRender = Object.entries(groupedTasks);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.tasksColumns}>
        {columnsRender.map(([name, tasks]) => (
          <Droppable key={name} droppableId={name}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <div className={styles.title}>
                  <div className={styles.titleWrapper}>{name}</div>
                </div>
                {tasks.map((item: ITask, index) => (
                  <Draggable key={item._id} draggableId={item._id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <DragCard loading={showLoader} task={item} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};
