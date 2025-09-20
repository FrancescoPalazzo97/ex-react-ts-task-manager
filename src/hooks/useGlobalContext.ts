import { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalContext';

const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) throw new Error(`Il GlobalContext va usato all'interno del contesto!`);
    return context;
};

export default useGlobalContext;