import Page from './page';
import { model, models, Schema } from 'mongoose';

const folderSchema = new Schema(
  {
    image: { type: String, required: true },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    users: { type: [{ type: Schema.Types.ObjectId, ref: 'User' }], required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

folderSchema.virtual('notifications', {
  ref: Page,
  localField: '_id',
  foreignField: 'folderId',
});

folderSchema.set('toObject', { virtuals: true });
folderSchema.set('toJSON', { virtuals: true });

const Folder = models.Folder || model('Folder', folderSchema);
export default Folder;
