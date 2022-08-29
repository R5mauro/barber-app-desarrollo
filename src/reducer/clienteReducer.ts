import { ClienteActionReducer } from "../types/typeApp"

const clienteReducer = (state: any, action: ClienteActionReducer): any => {
    switch (action.type) {
        case "ADD":
            const { nombre, fecha, hora } = action.payload
            return { nombre, fecha, hora }
        case "REMOVE":
            console.log("borrando cliente");

            break;
        default:
            break;
    }
}

export default clienteReducer;