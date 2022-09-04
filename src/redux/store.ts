import { configureStore } from '@reduxjs/toolkit'
import { Resumen } from "../types/typeApp"
import { resumenSlice } from './states/resumen.state'
// ...

export interface AppStore {
    resumen: Resumen[]
}

export const store = configureStore<AppStore>({
    reducer: {
        resumen: resumenSlice.reducer
    },
})
