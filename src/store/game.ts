import { entredWordsType, keyboardDataType } from '@/types'
import { createSlice } from '@reduxjs/toolkit'


type initialStateType= {
  word:string , 
  entredWords:entredWordsType[]
  keyboardData:keyboardDataType

}
const initialState:initialStateType={
  word:"peace",
  entredWords:[
    {
      words:[
        {
          alpha:'S' , status:'correct'
        },
        {
          alpha:'h' , status:'absent'
        },
        {
          alpha:'a' , status:'present'
        },
        {
          alpha:'w' , status:'absent'
        },
        {
          alpha:'j' , status:'present'
        }
      ]
    },
    {
      words:[
        {
          alpha:'S' , status:'correct'
        },
        {
          alpha:'a' , status:'correct'
        },
        {
          alpha:'d' , status:'absent'
        },
        {
          alpha:'j' , status:'correct'
        },
        {
          alpha:'i' , status:'present'
        }
      ]
    }
  ],
  keyboardData:{
    absent: "ernpf",
    present: "vgk",
    correct: "shaen"
  },

}

export const appGameSlice = createSlice({
  name: 'appGame',
  initialState,
  reducers: {
   
    handleAddLetter: (state, action) => {
       state.keyboardData.absent="yui"
      console.log(action.payload)
    }
    
  }
})
 
export const { handleAddLetter } = appGameSlice.actions
export default appGameSlice.reducer
