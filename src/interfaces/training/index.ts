import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface TrainingInterface {
  id?: string;
  name: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  location?: string;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface TrainingGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  location?: string;
  employee_id?: string;
}
