import { model, models, Schema } from 'mongoose';

const pageSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    folderId: { type: Schema.Types.ObjectId, ref: 'Folder', required: true },
    order: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Page = models.Page || model('Page', pageSchema);
export default Page;
