import { model, models, Schema } from 'mongoose';
import { categoryEventDataTypes, priorityDataTypes } from '@/typings';

const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, enum: categoryEventDataTypes, required: true },
    priority: { type: String, enum: priorityDataTypes, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Event = models.Event || model('Event', eventSchema);
export default Event;
