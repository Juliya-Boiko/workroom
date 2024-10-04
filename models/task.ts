import Attachment from './attachment';
import { model, models, Schema } from 'mongoose';
import { priorityDataTypes, taskStatusDataTypes } from '@/typings';

const taskSchema = new Schema(
  {
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    assignee: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    start: { type: Date, required: true },
    deadline: { type: Date, required: true },
    priority: { type: String, enum: priorityDataTypes, required: true },
    description: { type: String },
    status: { type: String, enum: taskStatusDataTypes, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

taskSchema.virtual('attachments', {
  ref: Attachment,
  localField: '_id',
  foreignField: 'taskId',
});

taskSchema.set('toObject', { virtuals: true });
taskSchema.set('toJSON', { virtuals: true });

const Task = models.Task || model('Task', taskSchema);
export default Task;
