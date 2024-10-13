export const getEditorNavigationHeader = (
  isOffer: boolean,
  resourceName?: string,
) => {
  if (resourceName) {
    return `Edytor ${isOffer ? "oferty" : "szablonu"} - ${resourceName}`;
  }

  return `Edytor ${isOffer ? "oferty" : "szablonu"}`;
};
