import { configureStore } from '@reduxjs/toolkit'
import  employesReducer from '../features/recursosHumanosSlice'

export const store = configureStore({
  reducer:{
    employes: employesReducer,
  }
})