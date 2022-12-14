import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    blogs: []
}

const blogReducer = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addBlog(state, action) {
            const newBlogData = action.payload;

            state.blogs.push(newBlogData);

        },
    }
})

export const { addBlog } = blogReducer.actions

export default blogReducer.reducer