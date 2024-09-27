import { model, models, Schema } from 'mongoose';
import { attachmentsDataTypes } from '@/typings';

const attachSchema = new Schema(
  {
    taskId: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
    title: { type: String },
    value: { type: String, required: true },
    type: { type: String, enum: attachmentsDataTypes, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Attachment = models.Attachment || model('Attachment', attachSchema);
export default Attachment;
