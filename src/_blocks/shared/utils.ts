export const getTextColorClassName = (color: string) => {
  return `text-${color}`;
};

export const twUtils = {
  color: getTextColorClassName,
};
