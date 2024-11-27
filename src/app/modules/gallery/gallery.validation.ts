import z from 'zod';

const createGalleryItemZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'field is required!',
    }),
    des: z.string({
      required_error: 'field is required!',
    }),
    img: z.object({
      url: z.string({
        required_error: 'field is required!',
      }),
      height: z.string({
        required_error: 'field is required!',
      }),
      width: z.string({
        required_error: 'field is required!',
      }),
    }),
  }),
});

const updateGalleryItemZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    des: z.string().optional(),
    img: z.object({
      url: z.string().optional(),
      height: z.string().optional(),
      width: z.string().optional(),
    }),
  }),
});

export const GalleryItemValidation = {
  createGalleryItemZodSchema,
  updateGalleryItemZodSchema,
};
