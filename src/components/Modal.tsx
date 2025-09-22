import { createPortal } from "react-dom";

import type { ModalType } from "../types";

type ModalProps = {
    type: ModalType,
    title: string,
    content: string,
    show: boolean,
    onClose: () => void
}

const buttonStyles = {
    DEFAULT: 'bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white shadow-slate-500/25 hover:shadow-slate-500/40 focus:ring-slate-400/50',
    ADD: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-blue-500/25 hover:shadow-blue-500/40 focus:ring-blue-400/50',
    DELETE: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-red-500/25 hover:shadow-red-500/40 focus:ring-red-400/50',
    MODIFY: 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-yellow-500/25 hover:shadow-yellow-500/40 focus:ring-yellow-400/50',
    ERROR: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-red-500/25 hover:shadow-red-500/40 focus:ring-red-400/50'
}

const Modal = ({
    type,
    title,
    content,
    show = false,
    onClose = () => { }
}: ModalProps) => {

    return show && createPortal((
        <div className="bg-black/50 backdrop-blur-xl p-4 absolute inset-0 flex justify-center items-center">
            <div className="max-w-[640px] bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 ring-1 ring-slate-600/20 px-8 py-4">
                <div className={`text-center pb-4 border-b border-slate-700/30`}>
                    <span className={`${type === 'ERROR' ? 'text-red-500 animate-pulse' : 'text-slate-200'} uppercase text-xl`}>{title}</span>
                </div>
                <div className=" py-4 border-b border-slate-700/30">
                    <span className="text-slate-200">{content}</span>
                </div>
                <div className="flex justify-center pt-4">
                    <button
                        className={`px-8 py-3 font-semibold rounded-lg shadow-lg transition-all duration-200 transform focus:outline-none focus:ring-2 ${buttonStyles[type]}`}
                        onClick={onClose}
                    >
                        Ho capito
                    </button>
                </div>
            </div>
        </div>
    ),
        document.body)
}

export default Modal
