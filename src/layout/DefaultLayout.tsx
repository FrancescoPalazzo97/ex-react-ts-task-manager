import { Outlet } from "react-router-dom";
import { Header, Modal } from "../components";
import { useGlobalContext } from "../hooks";

const DefaultLayout = () => {

    const { showModal, modalProps, closeModal } = useGlobalContext();

    return (
        <>
            <Modal
                {...modalProps}
                show={showModal}
                onClose={closeModal}
            />
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout
