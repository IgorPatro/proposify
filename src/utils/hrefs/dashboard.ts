export const getDashboardHref = () => `/dashboard`;

export const getDashboardOffersHref = () => "/dashboard/offer";

export const getDashboardTemplatesHref = () => "/dashboard/template";

export const getDashboardSettingsHref = () => "/dashboard/settings";

export const getDashboardUserSettingsHref = () => `/dashboard/settings/user`;

export const getDashboardCustomersHref = () => `/dashboard/customers`;

export const getDashboardTemplateHref = (templateUuid: string) =>
  `/dashboard/template/${templateUuid}`;
