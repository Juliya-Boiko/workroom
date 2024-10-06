import { model, models, Schema } from 'mongoose';

const timeLogSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    taskId: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
    date: { type: Date, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    duration: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Timelog = models.Timelog || model('Timelog', timeLogSchema);
export default Timelog;
