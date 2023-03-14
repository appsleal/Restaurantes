import { Schema, Types, model } from "mongoose";
import { IShopsMoongose } from "../shops.type";

const shopsSchema = new Schema<IShopsMoongose>(
    {
        hostId: {
            type: String,
            required: [true, 'Field "hostId" is required'],
        },
        name: {
            type: String,
            required: [true, 'Field "name" is required'],
        },
        title: {
            type: String,
            required: [true, 'Field "title" is required'],
        },
        description: {
            type: String,
            required: [true, 'Field "description" is required'],
        },
        location: {
            country: {
                type: String,
                required: [true, 'Field "country" is required'],
              },
              state: {
                type: String,
                required: [true, 'Field "state" is required'],
              },
              city: {
                type: String,
                required: [true, 'Field "city" is required'],
              },
              address: {
                type: String,
                required: [true, 'Field "address" is required'],
              },
              zipcode: {
                type: String,
                required: [true, 'Field "zipcode" is required'],
              },
        },
    }
);

shopsSchema.set('toJSON', {
  virtuals: true,
  getters: true,
  versionKey: false,
  transform: (_doc, ret) => {
    ret.createdAt = _doc.createdAt?.toLocaleString();
    ret.updatedAt = _doc.updatedAt?.toLocaleString();
    delete ret._id;
    delete ret.isDeleted;
  },
});

export default model<IShopsMoongose>('Restaurants',shopsSchema);