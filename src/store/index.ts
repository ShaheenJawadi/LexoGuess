import { configureStore } from '@reduxjs/toolkit'
import game from './game'



export const store = configureStore({
  reducer: { game  },
 
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
