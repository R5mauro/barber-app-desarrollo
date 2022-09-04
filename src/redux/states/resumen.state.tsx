import { createSlice, current } from '@reduxjs/toolkit'
import { Resumen } from '../../types/typeApp'

const cliente = {
    nombre: "",
    fecha: "",
    hora: ""
};

export const ResumenEmptyState: Resumen[] = [{
    serviciosSeleccionados: [],
    cliente
}];

export const resumenSlice = createSlice({
    name: "resumen",
    initialState: ResumenEmptyState,
    reducers: {
        addResumen: (state, action) => {
            //verificamos si el estado esta definido //
            if (state.length === 0) {
                // si no esta definido, lo definimos agregando el payload
                state = [action.payload];
                localStorage.setItem(`resumen`, JSON.stringify(state))
                return state;
            } else {
                // si el estado esta definido
                // verificamos si existe algun cliente //
                if (current(state)[0].cliente.nombre === "") {
                    // si no existe ninguno, lo agregamos
                    state = [action.payload];
                    localStorage.setItem(`resumen`, JSON.stringify(state))
                    return state;
                } else {
                    // si existe algun cliente, verificamos que el que queremos agregar exista o no
                    const indexCliente = state.findIndex((resumen: Resumen) => resumen.cliente.nombre === action.payload.cliente.nombre);
                    if (indexCliente >= 0) {
                        // si existe, lo reemplazamos //
                        state[indexCliente] = action.payload;
                        localStorage.setItem(`resumen`, JSON.stringify(state))
                        return state;

                    } else {
                        // si no existe, lo agregamos //
                        const { cliente, serviciosSeleccionados } = action.payload;
                        state = [...state, { cliente, serviciosSeleccionados }];
                        localStorage.setItem(`resumen`, JSON.stringify(state));
                        return state;
                    }
                }
            }
        },
        deleteResumen: (state, action) => {
            state = state.filter(resumen => resumen.cliente.nombre !== action.payload.cliente.nombre);
            localStorage.setItem(`resumen`, JSON.stringify(state));
            return state;
        },
        resetResumen: (state, action) => ResumenEmptyState,
    }
})
export const { addResumen, resetResumen, deleteResumen } = resumenSlice.actions;

export default resumenSlice.reducer;