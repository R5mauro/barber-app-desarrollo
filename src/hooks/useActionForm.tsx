import React, { useContext, useEffect, useState } from "react";
import { ClienteContext } from "../context/ClienteContext";
import { notificacion } from "../utilities/notificacion.utility";
import { deshabilitaFechaAnterior, validarForm } from "../utilities/validarForm.utility";


export const useActionForm = () => {
    const [data, setData] = useState({ nombre: "", fecha: "", hora: "" });
    useEffect(() => {
        // deshabilitamos la opcion de elegir una fecha anterior al dia actual
        deshabilitaFechaAnterior();
    }, [])
    const { dispatch } = useContext(ClienteContext);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        // cada vez que cambia el valor del input, se le asigna el mismo al estado "data"
        let target = e.target as HTMLInputElement;
        setData({
            ...data,
            [target.name]: target.value
        })
    }
    const handleAdd = (e: any) => {
        // validamos que el formulario este correcto y agregamos los datos al context
        e.preventDefault()
        if (validarForm(data)) {
            notificacion("Datos Guardados", "success");
            dispatch({
                payload: data,
                type: "ADD"
            })
            setData({
                nombre: "",
                fecha: "",
                hora: ""
            })
        }
    }
    return { data, handleAdd, handleChange }
}
