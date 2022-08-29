import { Toaster } from "react-hot-toast";
import { ClienteProvider } from "../../../context/ClienteContext";
import { ServicesProvider } from "../../../context/ServicesContext";
import useShowSection from "../../../hooks/useShowSection";
import InfoCliente from "../InfoCliente/InfoCliente";
import Resumen from "../Resumen/Resumen";
import ServiciosOfrecidos from "../ServiciosOfrecidos/ServiciosOfrecidos";



const Header = () => {

    const claseActual = useShowSection();

    return (
        <div className="header">
            <h1>App Peluquería</h1>
            <div className="nav">
                <button data-pag="1" className="actual" onClick={claseActual} >Servicios</button>
                <button data-pag="2" onClick={claseActual}>Informacion Cliente</button>
                <button data-pag="3" onClick={claseActual}>Resumen</button>
            </div>
            <ServicesProvider>
                <ClienteProvider>
                    <ServiciosOfrecidos />
                    <InfoCliente />
                    <Resumen />
                    <Toaster />
                </ClienteProvider>
            </ServicesProvider>
        </div>
    )
}

export default Header