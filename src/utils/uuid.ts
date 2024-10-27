import { v4 as uuidv4, validate } from "uuid";

export const generateUuid = () => {
  return uuidv4();
};

export const isUuid = (uuid: string) => {
  return validate(uuid);
};
