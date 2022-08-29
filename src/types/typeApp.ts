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

export interface InfoCliente {
    nombre: string,
    fecha: string,
    hora: string
}
export interface Resumen {
    serviciosSeleccionados: ServiceItem[],
    infoCliente: InfoCliente
}

export interface ServicesActionReducer {
    payload: any,
    type: "ADD" | "REMOVE"
}

export interface ClienteActionReducer {
    payload: any,
    type: "ADD" | "REMOVE"
}
