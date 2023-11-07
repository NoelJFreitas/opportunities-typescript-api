import mongoose from "mongoose";

export interface Company {
  name: string;
  cnpj: string;
  country: string;
  state: string;
  city: string;
}

const Schema = new mongoose.Schema<Company>(
  {
    name: { type: String, required: true },
    cnpj: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
  },
  {
    toJSON: {
      transform: (_, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const Company = mongoose.model("Company", Schema);
