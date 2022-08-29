import { useEffect, useState } from 'react'
import { mostrarServicios } from '../services/servicios.services';
import { ServiceFetch } from '../types/typeApp';



const useFetch = () => {
    const [data, setData] = useState<ServiceFetch>({
        servicios: [],
        isLoading: true,
        isError: false
    });
    useEffect(() => {
        mostrarServicios()
            .then(data => {
                setData({
                    servicios: data,
                    isLoading: false,
                    isError: false
                })
            })
            .catch(e => {
                setData({
                    servicios: [],
                    isLoading: false,
                    isError: true
                })
            })

    }, [])
    return data;
}

export default useFetch