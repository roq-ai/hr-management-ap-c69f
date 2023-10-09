import { BenefitInterface } from 'interfaces/benefit';
import { PerformanceReviewInterface } from 'interfaces/performance-review';
import { TrainingInterface } from 'interfaces/training';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  employee_number: number;
  hire_date: any;
  job_title: string;
  department: string;
  salary: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  benefit?: BenefitInterface[];
  performance_review?: PerformanceReviewInterface[];
  training?: TrainingInterface[];
  user?: UserInterface;
  _count?: {
    benefit?: number;
    performance_review?: number;
    training?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  department?: string;
  user_id?: string;
}
