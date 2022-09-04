
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useActionRedux } from "../../hooks/useActionRedux";
import ItemCarrito from "./ItemCarrito/ItemCarrito";


const Carrito = () => {
    const resumen = useActionRedux()
    return (
        <div className="page centered-content carrito">
            {
                resumen.length < 1
                    ? <>
                        <h1>El carrito esta vacio.</h1>
                        <Link to={"/"}>Volver al <span>Inicio</span>.</Link>
                    </>
                    : <>
                        <div className="heading-carrito">
                            <h1>Sus citas</h1>
                            <Link to={"/"} className="btn">Volver</Link>
                        </div>
                        {resumen.map((item, index) => {
                            return (<ItemCarrito key={index} item={item} />)
                        })}</>
            }
            <Toaster />
        </div>
    )
}

export default Carrito