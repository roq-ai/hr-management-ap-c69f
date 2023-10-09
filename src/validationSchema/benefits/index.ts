import * as yup from 'yup';

export const benefitValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  eligibility_criteria: yup.string().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  employee_id: yup.string().nullable().required(),
});
