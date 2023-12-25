import Key from "./key"
import Icon from '@mdi/react';
import { mdiBackspace } from '@mdi/js';
import { checkLetter } from "@/utils";
import { wordsData } from "@/types";


const  Keyboard=()=> {


 
  const keys =  [ 'azertyuiop', 'qsdfghjklm', 'wxcvbn#' ]

    const mockDataWord:wordsData ={
      absent: "ernpf",
      present: "vgk",
      correct: "shaen"
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
                      <div   className={` keyboardButton spec`} >
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
  