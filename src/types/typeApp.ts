export interface ServiceItem {
    id: number,
    nombre: string,
    precio: number,
    selected: boolean
}

export interface ServiceFetch {
    servicios: ServiceItem[],
    isLoading: boolean,
    isError: boolean
}

export interface Cliente {
    nombre: string,
    fecha: string,
    hora: string
}
export interface Resumen {
    serviciosSeleccionados: ServiceItem[],
    cliente: Cliente
}

export interface ServicesActionReducer {
    payload: any,
    type: "ADD" | "REMOVE"
}

export interface ClienteActionReducer {
    payload: any,
    type: "ADD" | "REMOVE"
}
