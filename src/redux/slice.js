import { createSlice, createAction, createReducer } from '@reduxjs/toolkit'


export const Myslise = createSlice({
	name: 'user',
	initialState: {
	  login: JSON.parse(localStorage.getItem('Контакты')) ?? [],
	  filter: '',
	},
	reducers: {
	  logIn(state, action) {
		return { ...state, login: [...state.login, action.payload] }
	  },
	  Delete(state, action) {
		return {
		  ...state,
		  login: state.login.filter((stat) => stat.id !== action.payload),
		}
	  },
	  Fil(state, action) {
		return { ...state, filter: action.payload }
	  },
	},
  })


  export const { logIn, Delete, Fil } = Myslise.actions
