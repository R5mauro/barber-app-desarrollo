import { ServiceItem } from "../../../../types/typeApp"

interface Props {
    servicio: ServiceItem
}
const ServicioItemCarrito = ({ servicio }: Props) => {
    return (
        <div className="servicio-item-servicios">
            <p> - {servicio.nombre}</p>
            <p className="color-blue bold">${servicio.precio}</p>
        </div>
    )
}

export default ServicioItemCarrito