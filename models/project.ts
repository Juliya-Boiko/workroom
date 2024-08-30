import { model, models, Schema } from 'mongoose';
import { priorityDataTypes } from '@/enums';

const projectSchema = new Schema(
  {
    companyId: { type: String, required: true },
    name: { type: String, required: true },
    userId: { type: String, required: true },
    start: { type: Date, required: true },
    deadline: { type: Date, required: true },
    description: { type: String },
    priority: { type: String, enum: priorityDataTypes, required: true },
    assignee: { type: [String], default: [] },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Project = models.Project || model('Project', projectSchema);
export default Project;
