import { useContext } from 'react'
import { ServicesContext } from '../../../../context/ServicesContext';
import { ServiceItem } from '../../../../types/typeApp';

const UseServicioClickeado = (servicio: ServiceItem, e: any) => {
    const { dispatch } = useContext(ServicesContext);
    const handleAction = (servicio: ServiceItem, type: "ADD" | "REMOVE") => {
        dispatch({
            payload: servicio,
            type
        });
    }

    // al hacer click en algun servicio, se le aplica la clase "seleccionado"
    let elemento;
    let target = e.target as HTMLButtonElement;
    let parent = target.parentElement;
    if (target.tagName === "P") {
        elemento = parent;
    } else {
        elemento = e.target;
    }

    // console.log(e.target.parentElement.dataset.idServicio);
    if (elemento !== null) {
        if ((elemento as Element).classList.contains("seleccionado")) {
            (elemento as Element).classList.remove("seleccionado");
            handleAction(servicio, "REMOVE")
        } else {
            (elemento as Element).classList.add("seleccionado");
            handleAction(servicio, "ADD");
        }
    }

}

export default UseServicioClickeado