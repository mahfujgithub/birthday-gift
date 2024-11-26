import z from 'zod';

const createGalleryItemZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'field is required!',
    }),
    des: z.string({
      required_error: 'field is required!',
    }),
    img: z.string({
      required_error: 'field is required!',
    }),
  }),
});

const updateGalleryItemZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    des: z.string().optional(),
    img: z.string().optional(),
  }),
});

export const GalleryItemValidation = {
  createGalleryItemZodSchema,
  updateGalleryItemZodSchema,
};
