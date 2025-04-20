import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (page = 1, thunkAPI) => {
    const limit = 10
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)

    if (!response.ok) {
        throw new Error('Failed to fetch posts')
    }

    const data = await response.json()
    return {
        data,
        page,
        hasMore: data.length === limit,
    }
})

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        page: 1,
        hasMore: true,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload.page === 1) {
                    state.posts = action.payload.data
                } else {
                    state.posts = [...state.posts, ...action.payload.data]
                }
                state.page = action.payload.page
                state.hasMore = action.payload.hasMore
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default postSlice.reducer
