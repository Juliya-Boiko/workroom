import { model, models, Schema } from 'mongoose';
import { userPositionsDataTypes } from '@/enums/EUserPosition';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    companyId: { type: String, required: true },
    position: { type: String, enum: userPositionsDataTypes },
    birthday: { type: Date },
    level: { type: String },
    location: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = models.User || model('User', userSchema);
export default User;
