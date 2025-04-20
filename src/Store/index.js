import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './userSlice'
import postsReducer from './postSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
    },
})
