import { atom, useAtom } from "jotai";

const selectedBlogUuidAtom = atom("");

export const useSelectedBlockUuid = () => {
  return useAtom(selectedBlogUuidAtom);
};
