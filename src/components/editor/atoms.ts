import { atom, useAtom } from "jotai";

const selectedBlogUuidAtom = atom("");

export const useSelectedBlockUuid = () => {
  return useAtom(selectedBlogUuidAtom);
};

const isSidebarLeftOpenAtom = atom(false);

export const useIsSidebarLeftOpen = () => {
  return useAtom(isSidebarLeftOpenAtom);
};
