import { createContext, useReducer } from "react";
import clienteReducer from "../reducer/clienteReducer";
import { ClienteActionReducer, InfoCliente } from "../types/typeApp";

const initialState = {
    cliente: [],
    dispatch: () => { }
}


interface ClienteContextType {
    cliente: InfoCliente[],
    dispatch: React.Dispatch<ClienteActionReducer>
}
export const ClienteContext = createContext<ClienteContextType>(initialState);

export const ClienteProvider = ({ children }: any) => {
    const [cliente, dispatch] = useReducer(clienteReducer, initialState.cliente)
    return (
        <ClienteContext.Provider value={{
            cliente, dispatch
        }}>
            {children}

        </ClienteContext.Provider>
    )
}