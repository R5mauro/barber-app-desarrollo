import React, { useReducer } from 'react'

import { createContext } from "react";
import servicesReducer from '../reducer/servicesReducer';
import { ServicesActionReducer, ServiceItem } from "../types/typeApp";


const initialState = {
    servicios: [],
    dispatch: () => { }
}
interface ServicesContextType {
    servicios: ServiceItem[],
    dispatch: React.Dispatch<ServicesActionReducer>
}
export const ServicesContext = createContext<ServicesContextType>(initialState)


export const ServicesProvider = ({ children }: any) => {
    const [servicios, dispatch] = useReducer(servicesReducer, initialState.servicios)
    return (
        <ServicesContext.Provider value={{
            servicios,
            dispatch
        }}>
            {children}
        </ServicesContext.Provider>
    )
}

