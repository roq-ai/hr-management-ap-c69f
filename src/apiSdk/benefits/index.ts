import queryString from 'query-string';
import { BenefitInterface, BenefitGetQueryInterface } from 'interfaces/benefit';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBenefits = async (query?: BenefitGetQueryInterface): Promise<PaginatedInterface<BenefitInterface>> => {
  return fetcher('/api/benefits', {}, query);
};

export const createBenefit = async (benefit: BenefitInterface) => {
  return fetcher('/api/benefits', { method: 'POST', body: JSON.stringify(benefit) });
};

export const updateBenefitById = async (id: string, benefit: BenefitInterface) => {
  return fetcher(`/api/benefits/${id}`, { method: 'PUT', body: JSON.stringify(benefit) });
};

export const getBenefitById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/benefits/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBenefitById = async (id: string) => {
  return fetcher(`/api/benefits/${id}`, { method: 'DELETE' });
};
