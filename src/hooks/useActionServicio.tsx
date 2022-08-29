import React, { useContext } from 'react'
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
        if (servicio.selected === true) {
            // si el servicio contiene la clase selected, lo removemos
            handleAction(servicio, "REMOVE")
        } else {
            // si no, lo agregamos
            handleAction(servicio, "ADD");
        }
    }
    return { handleClick, isSelected }
}
