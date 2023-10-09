import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface BenefitInterface {
  id?: string;
  name: string;
  description?: string;
  eligibility_criteria?: string;
  start_date?: any;
  end_date?: any;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface BenefitGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  eligibility_criteria?: string;
  employee_id?: string;
}
