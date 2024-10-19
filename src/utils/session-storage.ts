export const getSessionStorageItem = (key: string) => {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const item = window.sessionStorage.getItem(key);
    return item ?? undefined;
  } catch (error) {
    console.warn(`Error reading sessionStorage key "${key}":`, error);
    return undefined;
  }
};
