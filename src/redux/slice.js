import { createSlice } from '@reduxjs/toolkit'

export const Myslise = createSlice({
  name: 'user',
  initialState: {
    contacts: JSON.parse(localStorage.getItem('Контакты')) ?? [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      return { ...state, contacts: [...state.contacts, action.payload] }
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter((stat) => stat.id !== action.payload),
      }
    },
    filteredContact(state, action) {
      return { ...state, filter: action.payload }
    },
  },
})

export const { addContact, deleteContact, filteredContact } = Myslise.actions
