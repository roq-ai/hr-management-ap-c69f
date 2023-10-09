import queryString from 'query-string';
import { TrainingInterface, TrainingGetQueryInterface } from 'interfaces/training';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTrainings = async (
  query?: TrainingGetQueryInterface,
): Promise<PaginatedInterface<TrainingInterface>> => {
  return fetcher('/api/trainings', {}, query);
};

export const createTraining = async (training: TrainingInterface) => {
  return fetcher('/api/trainings', { method: 'POST', body: JSON.stringify(training) });
};

export const updateTrainingById = async (id: string, training: TrainingInterface) => {
  return fetcher(`/api/trainings/${id}`, { method: 'PUT', body: JSON.stringify(training) });
};

export const getTrainingById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/trainings/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTrainingById = async (id: string) => {
  return fetcher(`/api/trainings/${id}`, { method: 'DELETE' });
};
