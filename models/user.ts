import Task from './task';
import { model, models, Schema } from 'mongoose';
import { userPositionsDataTypes } from '@/typings';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    position: { type: String, enum: userPositionsDataTypes },
    birthday: { type: Date },
    level: { type: String },
    location: { type: String },
    profession: { type: String },
    phone: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.virtual('tasks', {
  ref: Task,
  localField: '_id',
  foreignField: 'assignee',
});

userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

const User = models.User || model('User', userSchema);
export default User;
