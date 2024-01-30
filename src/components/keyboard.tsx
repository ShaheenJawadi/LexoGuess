import Key from "./key"
import Icon from '@mdi/react';
import { mdiBackspace } from '@mdi/js';
import { checkLetter } from "@/utils";
import { keyboardDataType } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { handleSubmit, handleAddLetter,handleBackspace} from "@/store/game";
import { useEffect } from "react";


const  Keyboard=()=> {

  const dispatch = useDispatch<AppDispatch>()

  const keys =  [ 'azertyuiop', 'qsdfghjklm', 'wxcvbn#' ]
  const store = useSelector((state: RootState) => state.game)
  

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      const pressedKey:number = event.keyCode;


       if ((pressedKey >= 65)&&(pressedKey <= 90)) {
        dispatch(handleAddLetter((event.key as string).toLowerCase()));
      } else if (pressedKey == 13) {
         dispatch(handleSubmit())
      }else if (pressedKey == 8) {
        dispatch(handleBackspace());
      } 
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 
  
  
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
                .map((letter , index) =>
                letter=='#'?
                  (
                      <div key={index} onClick={()=>clickKey("#")} className={` keyboardButton spec`} >
                        <Icon path={mdiBackspace}
                          size={0.8}
                        />
                      </div>
                    
                  )  
                  :(
                    <Key
                    
                        key={index}
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
  