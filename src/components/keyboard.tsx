import Key from "./key"
import Icon from '@mdi/react';
import { mdiBackspace } from '@mdi/js';


const  Keyboard=()=> {


 
  const keys =  [ 'azertyuiop', 'qsdfghjklm', 'wxcvbn#' ]

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
  