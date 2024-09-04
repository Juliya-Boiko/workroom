import { model, models, Schema } from 'mongoose';
import { businessDirectionDataTypes, companySizeDataTypes } from '@/typings';

const companySchema = new Schema(
  {
    name: { type: String, required: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
    direction: { type: String, enum: businessDirectionDataTypes, required: true },
    size: { type: String, enum: companySizeDataTypes, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Company = models.Company || model('Company', companySchema);
export default Company;
