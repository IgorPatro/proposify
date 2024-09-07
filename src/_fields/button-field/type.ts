import { z } from "zod";

export const BUTTON_ACTION_TYPE = ["link", "download"] as const;
export const ButtonActionTypeEnum = z.enum(BUTTON_ACTION_TYPE);
export type ButtonActionType = z.infer<typeof ButtonActionTypeEnum>;

export const ButtonActionLinkSchema = z.object({
  href: z.string(),
  newTab: z.boolean(),
  type: z.literal("link"),
});
export type ButtonActionLink = z.infer<typeof ButtonActionLinkSchema>;

export const ButtonActionDownloadSchema = z.object({
  downloadUrl: z.string(),
  type: z.literal("download"),
});
export type ButtonActionDownload = z.infer<typeof ButtonActionDownloadSchema>;

export const ButtonActionSchema = ButtonActionLinkSchema.or(
  ButtonActionDownloadSchema,
);
export type ButtonAction = z.infer<typeof ButtonActionSchema>;

export const ButtonFieldConfigSchema = z.object({
  action: ButtonActionSchema,
  content: z.string(),
  type: z.literal("button"),
});
export type ButtonFieldConfig = z.infer<typeof ButtonFieldConfigSchema>;
