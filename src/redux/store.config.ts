import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "./auth/auth.slice";
import { getIconTheater } from "./theater/theater.slice";
import { getTiketRoom } from "./ticketRoom/ticket.auth";
export const store = configureStore({
    reducer:{
        authReducer,
        getIconTheater,
        getTiketRoom,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch