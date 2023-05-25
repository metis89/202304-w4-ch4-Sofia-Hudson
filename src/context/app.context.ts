import { createContext } from "react";

export type ContextStructure = {
  phoneContext: ReturnType<typeof "">;
};

export const Context = createContext<ContextStructure>({} as ContextStructure);
