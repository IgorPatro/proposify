import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useState,
} from "react";

type UseToggleReturnType = [
  boolean,
  () => void,
  Dispatch<SetStateAction<boolean>>,
];

export const useToggle = (defaultValue?: boolean): UseToggleReturnType => {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return [value, toggle, setValue];
};
