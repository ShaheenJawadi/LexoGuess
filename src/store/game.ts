import { entredWordsType, keyboardDataType, letterStatus } from '@/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


export const handleSubmit = createAsyncThunk(
  "appGame/handleSubmit",
  async (_ ,{getState}) => {

    try {
        const state = getState() as any;
        const game: InitialStateType = state.game;
      
         if (game.entredWords[game.line].length !== 5) { throw false;}
        const currentWord = game.entredWords[game.line].reduce( (prevVal:string, currVal)=>{
          return   prevVal   + currVal.alpha;
        }, "");
        const res = await axios.get( "https://api.dictionaryapi.dev/api/v2/entries/en/" + currentWord );
        const data = res.data;

        if (data.length === 1 && data[0].word) {
          console.log("Word found in the dictionary");
          return true;
        } else {
          throw new Error("Word not found in the dictionary");
        }

    }catch{
      
        return false
    }
  
  }
);
 

type InitialStateType= {
  word:string , 
  entredWords:entredWordsType[]
  keyboardData:keyboardDataType, 
  line :number ,

}
const initialState:InitialStateType={
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
  name: "appGame",
  initialState,
  reducers: {
    handleAddLetter: (state, action) => {
      let entredWords = state.entredWords;
      if (state.line < 6) {
        if (entredWords[state.line] === undefined) {
          entredWords.push([
            {
              alpha: action.payload,
              status: "",
            },
          ]);
        } else if (entredWords[state.line].length < 5) {
          entredWords[state.line].push({
            alpha: action.payload,
            status: "",
          });
        }
      }

      state.entredWords = entredWords;
    },
    handleBackspace: (state) => {
      let entredWords = state.entredWords;
      if (entredWords[state.line] !== undefined) {
        entredWords[state.line].pop();
      }
      state.entredWords = entredWords;
    },
     
  },
  extraReducers: (builder) => {
    builder.addCase(handleSubmit.fulfilled, (state, action) => {
      if(action.payload){
          let entredWords = state.entredWords;
          let keyboardData = state.keyboardData;
          let isCorrect: boolean = true;

     
          entredWords[state.line].map((value, index) => {
            let alpha = entredWords[state.line][index].alpha,
              status: "absent" | "present" | "correct" = "absent";
            if (state.word[index] == alpha) {
              status = "correct";
              keyboardData.correct += alpha;
            } else {
              isCorrect = false;

              if (state.word.indexOf(alpha) != -1) {
                status = "present";
                keyboardData.present += alpha;
              } else {
                status = "absent";
                keyboardData.absent += alpha;
              }
            }
            entredWords[state.line][index].status = status;
            keyboardData[status] += alpha;
          });

          state.entredWords = entredWords;

          if (isCorrect) {
            alert("Correct");
          } else if (state.line < 5) {
            state.line++;
          } else {
            alert("GameOver");
          }
     
      }
             
    });
  },
});
 
export const { handleAddLetter ,handleBackspace} = appGameSlice.actions
export default appGameSlice.reducer
