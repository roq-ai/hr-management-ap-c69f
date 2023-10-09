import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  established_at: yup.date().nullable(),
  industry_type: yup.string().nullable(),
  company_size: yup.number().integer().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
