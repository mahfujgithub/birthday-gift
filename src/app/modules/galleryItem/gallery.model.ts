import { model, Schema } from 'mongoose';
import { GalleryItemModel, IGalleryItem } from './gallery.interface';

// export const GalleryItemSchema = new Schema<IGalleryItem, GalleryItemModel>(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     des: {
//       type: String,
//       required: true,
//     },
//     img: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//     toJSON: {
//       virtuals: true,
//     },
//   },
// );

// export const GalleryItem = model<IGalleryItem, GalleryItemModel>(
//   'GalleryItems',
//   GalleryItemSchema,
// );

// import { Schema, model, Model } from 'mongoose';

// Define the sub-schema for the Image type
const ImageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
  },
  { _id: false }, // to prevent generating a new _id for the nested document
);

// Define the main schema for IGalleryItem
const GalleryItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    img: {
      type: ImageSchema,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

// Define the Mongoose model with the IGalleryItem interface and GalleryItemModel type
export const GalleryItem = model<IGalleryItem, GalleryItemModel>(
  'GalleryItem',
  GalleryItemSchema,
);

