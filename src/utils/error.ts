// TODO: Extend type guard and provide correct api error handling
export const isAPIError = (error: unknown): error is Error => {
  return error instanceof Error;
};
