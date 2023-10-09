interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Management Application v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage employee data', 'Manage training data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c06a5b62-87c0-419d-bfdf-0318d2610bea',
};
