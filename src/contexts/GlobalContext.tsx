import { createContext } from "react";
import { useTasks } from "../hooks";
import type { GlobalContextType } from "../types";

type GlobalContextProps = {
    children: React.ReactNode
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider = ({ children }: GlobalContextProps) => {

    const { tasks, addTask } = useTasks();

    const value = {
        tasks,
        addTask
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}