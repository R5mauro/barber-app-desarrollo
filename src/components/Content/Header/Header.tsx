import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { ClienteProvider } from "../../../context/ClienteContext";
import { ServicesProvider } from "../../../context/ServicesContext";
import { useActionRedux } from "../../../hooks/useActionRedux";
import useShowSection from "../../../hooks/useShowSection";
import InfoCliente from "../InfoCliente/InfoCliente";
import Resumen from "../Resumen/Resumen";
import ServiciosOfrecidos from "../ServiciosOfrecidos/ServiciosOfrecidos";



const Header = () => {

    const claseActual = useShowSection();
    const resumen = useActionRedux()


    return (
        <div className="header">
            <h1>App Peluquería</h1>
            <div className="nav">
                <div className="no-redirect">
                    <button data-pag="1" className="actual btn-nav " onClick={claseActual} >Servicios</button>
                    <button data-pag="2" className="btn-nav " onClick={claseActual}>Informacion Cliente</button>
                    <button data-pag="3" className="btn-nav " onClick={claseActual}>Resumen</button>
                </div>
                {resumen.length > 0 &&
                    <Link to="/carrito" className="btn-nav link" >Carrito
                        <svg width="15" height="16" viewBox="0 0 345 356" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="15" height="16" fill="transparent" />
                            <path d="M316.25 178C312.438 178 308.781 179.562 306.085 182.344C303.389 185.126 301.875 188.899 301.875 192.833V281.833C301.875 289.701 298.846 297.247 293.454 302.811C288.063 308.374 280.75 311.5 273.125 311.5H71.875C64.25 311.5 56.9373 308.374 51.5457 302.811C46.154 297.247 43.125 289.701 43.125 281.833V74.1663C43.125 66.2983 46.154 58.7524 51.5457 53.1888C56.9373 47.6253 64.25 44.4997 71.875 44.4997H158.125C161.937 44.4997 165.594 42.9369 168.29 40.1551C170.985 37.3733 172.5 33.6004 172.5 29.6663C172.5 25.7323 170.985 21.9594 168.29 19.1776C165.594 16.3958 161.937 14.833 158.125 14.833H71.875C56.6251 14.833 41.9997 21.0842 31.2164 32.2113C20.433 43.3385 14.375 58.4302 14.375 74.1663V281.833C14.375 297.569 20.433 312.661 31.2164 323.788C41.9997 334.915 56.6251 341.166 71.875 341.166H273.125C288.375 341.166 303 334.915 313.784 323.788C324.567 312.661 330.625 297.569 330.625 281.833V192.833C330.625 188.899 329.111 185.126 326.415 182.344C323.719 179.562 320.062 178 316.25 178Z" fill="black" />
                            <path d="M329.504 23.941C328.846 22.4198 327.942 21.0253 326.83 19.8173C326.658 19.6245 326.6 19.3723 326.413 19.1795C326.226 18.9867 325.982 18.9273 325.795 18.7493C323.238 16.197 319.807 14.7897 316.25 14.8333H230C226.188 14.8333 222.531 16.3961 219.835 19.1779C217.14 21.9597 215.625 25.7326 215.625 29.6667C215.625 33.6007 217.14 37.3736 219.835 40.1554C222.531 42.9372 226.188 44.5 230 44.5H281.549L176.712 152.68C175.339 154.048 174.244 155.685 173.49 157.494C172.737 159.304 172.34 161.25 172.324 163.22C172.307 165.19 172.671 167.143 173.394 168.966C174.117 170.789 175.184 172.445 176.534 173.838C177.883 175.23 179.488 176.332 181.255 177.078C183.022 177.824 184.915 178.199 186.823 178.182C188.732 178.165 190.618 177.755 192.372 176.978C194.126 176.201 195.712 175.071 197.038 173.654L301.875 65.4743V118.667C301.875 122.601 303.39 126.374 306.085 129.155C308.781 131.937 312.438 133.5 316.25 133.5C320.063 133.5 323.719 131.937 326.415 129.155C329.111 126.374 330.625 122.601 330.625 118.667V29.6667C330.627 27.6999 330.245 25.7528 329.504 23.941V23.941Z" fill="black" />
                        </svg></Link>

                }
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