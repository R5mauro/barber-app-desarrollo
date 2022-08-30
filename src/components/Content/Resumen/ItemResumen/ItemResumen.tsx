import { ServiceItem } from "../../../../types/typeApp"
import { useActionServicio } from "../../../../hooks/useActionServicio";

interface Props {
    servicio: ServiceItem
}
const ItemResumen = ({ servicio }: Props) => {
    const { handleClick } = useActionServicio(servicio);

    return (
        <div className="item-resumen">
            <div className="nombre">
                <p className="btn" onClick={handleClick}>X</p>
                <p>{servicio.nombre}</p>
            </div>
            <p className="color-blue">${servicio.precio}</p>
        </div>
    )
}

export default ItemResumen