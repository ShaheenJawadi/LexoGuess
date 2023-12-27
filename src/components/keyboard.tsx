import Key from "./key"
import Icon from '@mdi/react';
import { mdiBackspace } from '@mdi/js';
import { checkLetter } from "@/utils";
import { keyboardDataType } from "@/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { handleAddLetter } from "@/store/game";


const  Keyboard=()=> {

  const dispatch = useDispatch<AppDispatch>()

  const keys =  [ 'azertyuiop', 'qsdfghjklm', 'wxcvbn#' ]

    const mockDataWord:keyboardDataType ={
      absent: "ernpf",
      present: "vgk",
      correct: "shaen"
    }
    const clickKey=(letter:string)=>{
      if(letter!="#"){

        dispatch(handleAddLetter(letter));

      }
      else {
          console.log('backspace')
      }

    }

    return (
      <>
        <div className="keyboardCore"  >
   
          {keys.map((row, index) => (
            <div key={index} className="keyboardRow">
              {row
                .split('')
                .map((letter) =>
                letter=='#'?
                  (
                      <div  onClick={()=>clickKey("#")} className={` keyboardButton spec`} >
                        <Icon path={mdiBackspace}
                          size={0.8}
                        />
                      </div>
                    
                  )  
                  :(
                    <Key
                    
                      key={letter}
                      letterStatus={checkLetter(letter ,mockDataWord)}
                      letter={letter} 
                      onClick={(l)=>clickKey(l)}
                      
                    />
                  )
                )}
            </div>
          ))}
  
        </div>
      </>
    )
  }
  
  export default Keyboard
  