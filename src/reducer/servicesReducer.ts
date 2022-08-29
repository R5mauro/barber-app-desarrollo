import { ServiceItem, ServicesActionReducer } from '../types/typeApp'

const servicesReducer = (state: any, action: ServicesActionReducer) => {
    switch (action.type) {
        case "ADD":
            // verirficar que el servicio existe o no
            const existService = state.find((service: ServiceItem) => service.id === action.payload.id);
            if (existService) {
                // si el servicio ya existe retornamos el estado actual
                return state;
            } else {
                // si no existe retornamos el estado actual y le agregados el servicio seleccionado
                const { id, nombre, precio } = action.payload;
                const selected = true;
                return [...state, { id, nombre, precio, selected }]
            }
        case "REMOVE":
            return state.filter((service: ServiceItem) => service.id !== action.payload.id)
    }

}

export default servicesReducer