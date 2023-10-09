const mapping: Record<string, string> = {
  benefits: 'benefit',
  companies: 'company',
  employees: 'employee',
  'performance-reviews': 'performance_review',
  trainings: 'training',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
