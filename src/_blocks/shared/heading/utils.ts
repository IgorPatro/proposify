export const getHeadingClassNames = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "@2xl:text-lg text-base";
    case "medium":
      return "";
    case "large":
      return "@2xl:text-4xl text-3xl font-semibold";
  }
};
