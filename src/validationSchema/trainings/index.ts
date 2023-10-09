import * as yup from 'yup';

export const trainingValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  location: yup.string().nullable(),
  employee_id: yup.string().nullable().required(),
});
