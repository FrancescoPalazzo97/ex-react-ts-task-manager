import { useState } from "react"
import type { ModalType } from "../types"

type ModalPropsType = {
    type: ModalType,
    title: string,
    content: string,
}

type ReturnType = [modalProps: ModalPropsType, changeProps: (data: ModalPropsType) => void]

const useModal = (): ReturnType => {

    const [modalProps, setModalProps] = useState<ModalPropsType>({
        type: "DEFAULT",
        title: 'DEFAULT',
        content: 'DEFAULT'
    })

    const changeProps = (data: ModalPropsType) => {
        setModalProps(data);
    }

    return [modalProps, changeProps];
}

export default useModal;