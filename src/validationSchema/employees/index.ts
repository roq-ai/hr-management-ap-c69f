import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  employee_number: yup.number().integer().required(),
  hire_date: yup.date().required(),
  job_title: yup.string().required(),
  department: yup.string().required(),
  salary: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
