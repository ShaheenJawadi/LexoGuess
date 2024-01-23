import { entredWordsType, keyboardDataType, letterStatus } from '@/types'
import { createSlice } from '@reduxjs/toolkit'


type initialStateType= {
  word:string , 
  entredWords:entredWordsType[]
  keyboardData:keyboardDataType, 
  line :number ,

}
const initialState:initialStateType={
  word:"peace",
  entredWords:[],
  keyboardData:{
    absent: "",
    present: "",
    correct: ""
  },
  line :0 ,

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


      
    },
    handleSubmit: (state) => {
      let entredWords = state.entredWords;
      let keyboardData = state.keyboardData;
      let isCorrect:boolean = true  ;
      
      if(entredWords[state.line] !==undefined &&entredWords[state.line].length==5){
        
        
        entredWords[state.line].map((value , index )=>{
          let alpha=entredWords[state.line][index].alpha , status:"absent" | "present" | "correct"="absent";
          if(state.word[index]== alpha){
            status="correct";
            keyboardData.correct+=alpha;


          }
          else {
            isCorrect=false ; 

            if(state.word.indexOf(alpha)!=-1){
              status="present";
              keyboardData.present+=alpha;

            }
            else {
              status="absent";
              keyboardData.absent+=alpha;
            }
           
          }
          entredWords[state.line][index].status=status
          keyboardData[status]+=alpha

        })

        state.entredWords =entredWords
       


        
        if(isCorrect){
          alert('correct')
        }
        else if(state.line<5){
          state.line++
        }
        else {
          alert('GameOver')
        }

      }

      else {
        alert('No')
      }
      
    },

    
  }
})
 
export const { handleAddLetter ,handleBackspace ,handleSubmit} = appGameSlice.actions
export default appGameSlice.reducer
