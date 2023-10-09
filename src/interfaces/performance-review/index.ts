import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceReviewInterface {
  id?: string;
  review_date: any;
  reviewer: string;
  rating: number;
  comments?: string;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface PerformanceReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  reviewer?: string;
  comments?: string;
  employee_id?: string;
}
