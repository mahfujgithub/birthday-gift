import { Model } from 'mongoose';

export type IGalleryItem = {
  title: string;
  des: string;
  img: string;
};

export type GalleryItemModel = Model<IGalleryItem, Record<string, unknown>>;
