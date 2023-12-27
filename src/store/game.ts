import { entredWordsType, keyboardDataType } from '@/types'
import { createSlice } from '@reduxjs/toolkit'


type initialStateType= {
  word:string , 
  entredWords:entredWordsType
  keyboardData:keyboardDataType

}
const initialState={
  word:"peace",
  entredWords:[],
  keyboardData:null,

}

export const appGameSlice = createSlice({
  name: 'appGame',
  initialState,
  reducers: {
   
    handleAddLetter: (state, action) => {
      const value = action.payload
      console.log(action.payload)
    }
    
  }
})
 
export const { handleAddLetter } = appGameSlice.actions
export default appGameSlice.reducer
