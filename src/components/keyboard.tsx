import Key from "./key"
import Icon from '@mdi/react';
import { mdiBackspace } from '@mdi/js';
import { checkLetter } from "@/utils";
import { keyboardDataType } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { handleAddLetter,handleBackspace} from "@/store/game";


const  Keyboard=()=> {

  const dispatch = useDispatch<AppDispatch>()

  const keys =  [ 'azertyuiop', 'qsdfghjklm', 'wxcvbn#' ]
  const store = useSelector((state: RootState) => state.game)
  
  
    const clickKey=(letter:string)=>{
      if(letter!="#"){

        dispatch(handleAddLetter(letter));

      }
      else {

        dispatch(handleBackspace());
        
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
                      letterStatus={checkLetter(letter ,store.keyboardData)}
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
  