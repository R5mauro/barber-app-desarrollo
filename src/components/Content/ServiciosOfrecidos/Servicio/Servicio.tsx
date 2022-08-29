
import { useActionServicio } from "../../../../hooks/useActionServicio";
import { ServiceItem } from "../../../../types/typeApp"

interface Props {
    servicio: ServiceItem
}

const Servicio = ({ servicio }: Props) => {
    const { handleClick, isSelected } = useActionServicio(servicio);
    const selected = isSelected(servicio)

    return (

        <div className={selected ? "seleccionado servicio" : "servicio"} onClick={handleClick}>
            <p>{servicio.nombre}</p>
            <p className="servicio-precio">${servicio.precio}</p>
        </div>
    )
}

export default Servicio