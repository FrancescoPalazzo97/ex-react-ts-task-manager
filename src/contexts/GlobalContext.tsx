import { createContext } from "react";
import type { GlobalContextType } from "../types";

type GlobalContextProps = {
    children: React.ReactNode
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider = ({ children }: GlobalContextProps) => {

    return (
        <GlobalContext.Provider value={{}}>
            {children}
        </GlobalContext.Provider>
    )
}