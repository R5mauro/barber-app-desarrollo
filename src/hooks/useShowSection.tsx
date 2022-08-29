import React, { useEffect, useState } from 'react'

const useShowSection = () => {
    const [paginaActual, setPaginaActual] = useState(1);

    const claseActual: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
        // coloca clase actual al elemento clickeado
        const actualExistente = document.querySelector(".actual");
        actualExistente && actualExistente.classList.remove("actual");
        const element = e.target as HTMLButtonElement;

        // si existe el dataset de la pestaña...
        if (element.dataset.pag !== undefined) {
            element.classList.add("actual");
            setPaginaActual(+element.dataset.pag)
        }
    }
    useEffect(() => {
        // elimina seccion anterior
        const seccionExistente = document.querySelector(".mostrar-seccion");
        seccionExistente && seccionExistente.classList.remove("mostrar-seccion");
        // muestra seccion actual y agrega clase "actual"
        let element = document.getElementById(`${paginaActual}`);
        if (element !== null) {
            element.classList.add("mostrar-seccion");
        }
    }, [paginaActual])
    return claseActual;
}

export default useShowSection