import { model, models, Schema } from 'mongoose';
import { priorityDataTypes } from '@/enums';

const projectSchema = new Schema(
  {
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    name: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    start: { type: Date, required: true },
    deadline: { type: Date, required: true },
    description: { type: String },
    priority: { type: String, enum: priorityDataTypes, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Project = models.Project || model('Project', projectSchema);
export default Project;
