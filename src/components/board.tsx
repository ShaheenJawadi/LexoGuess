import { entredWordsType } from "@/types";
import Cell from "./cell"


function Board() {


  const test:entredWordsType[]=[
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
  ];

    return (
      <>
        <div className="boardCore" >
          <div className="board">
          {[...new Array(6)].map((_, wordIndex) => 
            [...new Array(5)].map((_, letterIndex) => (
              <Cell key={wordIndex+"-"+letterIndex}
                letter={test[wordIndex]?.words[letterIndex]?.alpha}
                letterStatus={test[wordIndex]?.words[letterIndex]?.status}

              />
            ))
          )}
          </div>
        </div>
      </>
    )
  }
  
  export default Board
  