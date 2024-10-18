import { ResourceEnum } from "@/server/api/resource/types";

export const getEditorTemplateHref = (templateUuid: string) =>
  `/editor/template/${templateUuid}`;

export const getEditorOfferHref = (offerUuid: string) =>
  `/editor/offer/${offerUuid}`;

export const getEditorTemplatePreviewHref = (templateUuid: string) => {
  return `/editor/template/${templateUuid}/preview`;
};

export const getEditorOfferPreviewHref = (offerUuid: string) => {
  return `/editor/offer/${offerUuid}/preview`;
};

export const getBlockPreviewHref = (
  blockUuid: string,
  resourceUuid: string,
  type: ResourceEnum,
) => {
  return `/editor/block/${blockUuid}?resourceUuid=${resourceUuid}&type=${type}`;
};
