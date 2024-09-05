import {
  type ButtonAction,
  type ButtonActionDownload,
  type ButtonActionLink,
  type ButtonActionType,
  ButtonActionTypeEnum,
} from "./type";

export const isButtonActionTypeLink = (action: ButtonActionType) => {
  return action === ButtonActionTypeEnum.Values.link;
};

export const isButtonActionTypeDownload = (action: ButtonActionType) => {
  return action === ButtonActionTypeEnum.Values.download;
};

export const isButtonActionLink = (
  action: ButtonAction,
): action is ButtonActionLink => {
  return isButtonActionTypeLink(action.type);
};

export const isButtonActionDownload = (
  action: ButtonAction,
): action is ButtonActionDownload => {
  return isButtonActionTypeDownload(action.type);
};
