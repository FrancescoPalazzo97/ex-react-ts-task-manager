import { createContext } from "react";
import type { GlobalContextType } from "../types";

type GlobalContextProps = {
    children: React.ReactNode
}

const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalProvider = ({ children }: GlobalContextProps) => {

    <GlobalContext.Provider value={ }>
        {children}
    </GlobalContext.Provider>
}