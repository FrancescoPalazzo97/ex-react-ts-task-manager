import { createContext } from "react";
import { useTasks } from "../hooks";
import type { TaskType } from "../types";

type GlobalContextProps = {
    children: React.ReactNode
}

type GlobalContextType = {
    tasks: TaskType[]
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider = ({ children }: GlobalContextProps) => {

    const tasks = useTasks();

    const value = {
        tasks
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}