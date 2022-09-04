import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addResumen, ResumenEmptyState } from "../redux/states/resumen.state";
import { AppStore } from "../redux/store";

import { Resumen } from "../types/typeApp";

export const useActionRedux = () => {
    // este hook actualiza el estado de redux con los datos del local storage // 
    const [resumen, setResumen] = useState<Resumen[]>(ResumenEmptyState)
    const dispatch = useDispatch()
    const resumenState = useSelector((store: AppStore) => store.resumen)
    // console.log(resumenState);

    useEffect(() => {
        const storageRequest = localStorage.getItem("resumen");
        if (storageRequest != null) {
            const storageResponse = JSON.parse(storageRequest)
            // console.log(storageResponse);
            setResumen(storageResponse);
            storageResponse.forEach((element: Resumen) => {
                dispatch(addResumen(element))
            });
        }
    }, [])

    useEffect(() => {
        const storageRequest = localStorage.getItem("resumen");
        if (storageRequest != null) {
            const storageResponse = JSON.parse(storageRequest)
            // console.log(storageResponse);
            setResumen(storageResponse);
        }
    }, [resumenState])

    return resumen;

}
