import z from 'zod';

const createSliderZodSchema = z.object({
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

export const SliderItemValidation = {
  createSliderZodSchema,
};
