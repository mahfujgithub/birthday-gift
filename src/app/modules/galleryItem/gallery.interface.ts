import { Model } from 'mongoose';

export type Image = {
  url: string;
  height: string;
  width: string;
};

export type IGalleryItem = {
  title: string;
  des: string;
  img: Image;
};

export type GalleryItemModel = Model<IGalleryItem, Record<string, unknown>>;
