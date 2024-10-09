import { model, models, Schema } from 'mongoose';
import { priorityDataTypes } from '@/typings';
import Task from './task';
import Folder from './folder';

const projectSchema = new Schema(
  {
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    name: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    start: { type: Date, required: true },
    deadline: { type: Date, required: true },
    description: { type: String },
    priority: { type: String, enum: priorityDataTypes, required: true },
    image: { type: String },
    order: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

projectSchema.virtual('tasks', {
  ref: Task,
  localField: '_id',
  foreignField: 'projectId',
});

projectSchema.virtual('folders', {
  ref: Folder,
  localField: '_id',
  foreignField: 'projectId',
});

projectSchema.set('toObject', { virtuals: true });
projectSchema.set('toJSON', { virtuals: true });

const Project = models.Project || model('Project', projectSchema);
export default Project;
