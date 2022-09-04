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

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch