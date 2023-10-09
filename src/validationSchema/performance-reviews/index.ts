import * as yup from 'yup';

export const performanceReviewValidationSchema = yup.object().shape({
  review_date: yup.date().required(),
  reviewer: yup.string().required(),
  rating: yup.number().integer().required(),
  comments: yup.string().nullable(),
  employee_id: yup.string().nullable().required(),
});
