import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        putPosts: (state, action) => {
            return action.payload;
        },
    },
});


export const { putPosts } = postsSlice.actions;
export default postsSlice.reducer;
