import { createContext, useState } from "react";
import { useTasks, useModal } from "../hooks";
import type { GlobalContextType, ModalType, ModalPropsType } from "../types";

type GlobalContextProps = {
    children: React.ReactNode
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider = ({ children }: GlobalContextProps) => {

    const { tasks, addTask } = useTasks();

    const [showModal, setShowModal] = useState(false);

    const [modalProps, setModalProps] = useModal();

    const launchModal = (data: ModalPropsType) => {
        setModalProps(data);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const value = {
        tasks,
        addTask,
        showModal,
        modalProps,
        launchModal,
        closeModal
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}