import * as yup from 'yup';

export const filterTaskSchema = yup.object({
  // start: yup.date().default(new Date()).required('Start date is required field'),
  // deadline: yup.date().default(new Date()).required('Deadline is required field'),
  priority: yup.string().trim().nullable(),
  status: yup.string().trim().nullable(),
  assignee: yup.array(
    yup
      .object({
        _id: yup.string().required(),
        name: yup.string().required(),
        avatar: yup.string().nullable().default(null),
      })
      .default([])
  ),
});

export type FilterTaskFormData = yup.InferType<typeof filterTaskSchema>;
