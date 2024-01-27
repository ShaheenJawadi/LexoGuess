import { PopupViews } from '@/popup/popup.context';
import { entredWordsType, keyboardDataType, letterStatus } from '@/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


export const handleSubmit = createAsyncThunk(
  "appGame/handleSubmit",
  async (_ ,{getState}) => {

    try {
        const state = getState() as any;
        const game: InitialStateType = state.game;
        if(game.isLoading){
          throw new Error("Fetching a word");
        }
      
         if (game.entredWords[game.line].length !== 5) { throw false;}
        const currentWord = game.entredWords[game.line].reduce( (prevVal:string, currVal)=>{
          return   prevVal   + currVal.alpha;
        }, "");
        const res = await axios.get( "https://api.dictionaryapi.dev/api/v2/entries/en/" + currentWord );
        const data = res.data;

        if (data.length  && data[0].word) {
          return true;
        } else {
          throw new Error("Word not found in the dictionary");
        }

    }catch{
      
        return false
    }
  
  }
);
 

export const fetchRandomWord = createAsyncThunk(
  "appGame/fetchRandomWord",
  async () => {
    try {
      const res = await axios.get(
        "https://random-word-api.herokuapp.com/word?length=5&number=100"
      );
      const data = res.data;

      if (data.length  ) {
         
        return data[Math.floor(Math.random() * 100)];
      } else {
        throw new Error("Failed to fetch random word");
      }
    } catch {
      return null;
    }
  }
);

type InitialStateType = {
  word: string;
  entredWords: entredWordsType[];
  keyboardData: keyboardDataType;
  line: number;
  isLoading: boolean;
  gameState: null | PopupViews;
};
const initialState: InitialStateType = {
  word: "peace",
  entredWords: [],
  keyboardData: {
    absent: "",
    present: "",
    correct: "",
  },
  line: 0,
  isLoading:true,
  gameState:null,
};
 
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
    builder
      .addCase(handleSubmit.fulfilled, (state, action) => {
        if (action.payload) {
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
            state.gameState="CORRECT";
          } else if (state.line < 5) {
            state.line++;
          } else {
            state.gameState = "WRONG";

          }
        }
      })
      .addCase(fetchRandomWord.fulfilled, (state, action) => {
        if (action.payload){state.word = action.payload; state.isLoading=false}
      });
  },
});
 
export const { handleAddLetter ,handleBackspace} = appGameSlice.actions
export default appGameSlice.reducer
