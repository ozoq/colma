import { createContext, useContext } from "react";

export type GlobalContextType = {
  currentUserId: number | null;
};

export const GlobalContext = createContext<GlobalContextType>({
  currentUserId: null,
});

export default function useGlobalContext() {
  return useContext(GlobalContext);
}
