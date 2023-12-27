import { entredWordsType, keyboardDataType } from '@/types'
import { createSlice } from '@reduxjs/toolkit'


type initialStateType= {
  word:string , 
  entredWords:entredWordsType[]
  keyboardData:keyboardDataType, 
  line :number ,

}
const initialState:initialStateType={
  word:"peace",
  entredWords:[
    [
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
    ],
   [
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
   
  ],
  keyboardData:{
    absent: "ernpf",
    present: "vgk",
    correct: "shaen"
  },
  line :2 ,

}

export const appGameSlice = createSlice({
  name: 'appGame',
  initialState,
  reducers: {
   
    handleAddLetter: (state, action) => {
      let entredWords = state.entredWords;
      if(state.line<6){
        if(entredWords[state.line]===undefined){
          entredWords.push([{
            alpha:action.payload , status:''
          }])

        }
        else if (entredWords[state.line].length<5) {
          
          entredWords[state.line].push({
            alpha:action.payload , status:''
          })
        }
      }


     
        state.entredWords =entredWords

      
    },
    handleBackspace: (state) => {
      let entredWords = state.entredWords;
      if(entredWords[state.line] !==undefined){
        entredWords[state.line].pop()


      }
  

     
        state.entredWords =entredWords

        console.log(JSON.stringify(state.entredWords))

      
    }
    
  }
})
 
export const { handleAddLetter ,handleBackspace} = appGameSlice.actions
export default appGameSlice.reducer
