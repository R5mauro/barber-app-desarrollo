import { useContext } from 'react'
import { ServicesContext } from '../context/ServicesContext';
import { ServiceItem } from '../types/typeApp';

export const useActionServicio = (servicio: ServiceItem) => {
    const { servicios, dispatch } = useContext(ServicesContext);

    const isSelected = (servicio: ServiceItem) => {
        const selected = servicios.find(service => service.id === servicio.id);
        return selected;
    }

    const handleAction = (servicio: ServiceItem, type: "ADD" | "REMOVE") => {
        dispatch({
            payload: servicio,
            type
        });
    }
    const handleClick = () => {
        const selected = isSelected(servicio)
        if (selected) {
            // si el servicio contiene la clase selected, lo removemos
            handleAction(servicio, "REMOVE")
            console.log("selected", servicio);

        } else {
            // si no, lo agregamos
            handleAction(servicio, "ADD");
            console.log("add", servicio);

        }
    }
    return { handleClick, isSelected }
}
