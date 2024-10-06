import { model, models, Schema } from 'mongoose';

const commentSchema = new Schema(
  {
    taskId: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
    text: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Comment = models.Comment || model('Comment', commentSchema);
export default Comment;
