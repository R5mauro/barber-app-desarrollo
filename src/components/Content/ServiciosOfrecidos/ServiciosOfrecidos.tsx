import { memo } from "react";
import useFetch from "../../../hooks/useFetch"
import Loader from "../../Loader/Loader";
import Servicio from "./Servicio/Servicio";


const ServiciosOfrecidos = memo(() => {
    const { servicios, isLoading } = useFetch();

    if (isLoading) return <Loader />

    return (
        <>
            <div className="pagina-servicios mostrar-seccion pagina" id="1">
                <div className="contenedor-servicios">
                    {
                        servicios.map(servicio => (
                            <Servicio key={servicio.id}
                                servicio={servicio}
                            />
                        ))
                    }
                </div>
            </div>

        </>
    )
})

export default ServiciosOfrecidos;