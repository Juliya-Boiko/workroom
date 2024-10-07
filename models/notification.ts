import { model, models, Schema } from 'mongoose';
import { notificationsDataTypes } from '@/typings';

const notificationSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    taskId: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
    text: { type: String, required: true },
    type: { type: String, enum: notificationsDataTypes, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Notification = models.Notification || model('Notification', notificationSchema);
export default Notification;
