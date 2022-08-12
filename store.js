import { configureStore, createSlice } from '@reduxjs/toolkit'

const folderSlice = createSlice({
  name: 'folders',
  initialState: {
    folders: []
  },
  reducers: {
    addNewFolder (state, action) {
      state.folders.push(action.payload)
    }
  }
})

export const actions = folderSlice.actions

export const store = configureStore({
  reducer: folderSlice.reducer
})
