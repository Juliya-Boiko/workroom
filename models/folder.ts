import { model, models, Schema } from 'mongoose';

const folderSchema = new Schema(
  {
    image: { type: String, required: true },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    pages: { type: Number, required: true },
    users: { type: [{ type: Schema.Types.ObjectId, ref: 'User' }], required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Folder = models.Folder || model('Folder', folderSchema);
export default Folder;
