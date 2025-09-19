import { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalContext';

const useGlobalContext = () => {
    try {
        const context = useContext(GlobalContext);
        if (!context) throw new Error(`Il GlobalContext va usato all'interno del contesto!`);
        return context;
    } catch (e) {
        if (e instanceof Error) {
            console.error('Error: ', e);
        } else {
            console.error('Errore Generico');
        }
    }
};

export default useGlobalContext;