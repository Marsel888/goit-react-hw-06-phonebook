import { configureStore } from '@reduxjs/toolkit'
import { createSlice, createAction, createReducer } from '@reduxjs/toolkit'
import {Myslise} from './slice'

export const store = configureStore({
  reducer: {
    user: Myslise.reducer,
  },
})


