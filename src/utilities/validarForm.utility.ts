import { InfoCliente } from "../types/typeApp"
import { notificacion } from "./notificacion.utility";
export const deshabilitaFechaAnterior = () => {
    const inputFecha = document.getElementById("fecha");
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1;
    const dia = fechaActual.getDate() + 1;

    const fechaDeshabilitar = `${year}-${mes < 10 ? `0${mes}` : mes}-${dia < 10 ? `0${dia}` : dia}`;
    if (inputFecha) {
        (inputFecha as HTMLInputElement).min = fechaDeshabilitar;
    }
}


export const validarForm = ({ nombre, fecha, hora }: InfoCliente) => {
    if ((nombre !== "" && fecha !== "" && hora !== "")) {
        // validar nombre mayor que 3 letras
        if (nombre.length < 3) { notificacion("Ingrese un nombre correcta", "error"); return false };
        // validar fecha mayor que el dia actual
        if (Date.parse(fecha) < Date.now()) {
            notificacion("Ingrese una fecha correcta", "error"); notificacion("El turno se debe reservar con un dia de anticipación");
            ; return false
        };
        // validar hora mayor que 8am y menor que 8pm
        if (parseInt(hora.split(":")[0]) >= 20 ||
            parseInt(hora.split(":")[0]) <= 7) { notificacion("Ingrese una hora correcta", "error"); notificacion("El negocio abre de 8AM a 8PM"); return false };
        return true;

    } else {
        notificacion("Llene el formulario", "error");
    }
}