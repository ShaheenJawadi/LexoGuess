import { entredWordsType } from "@/types";
import Cell from "./cell"
import { useSelector } from "react-redux";
import {  RootState } from "@/store"; 

 

function Board( ) {
  const data = useSelector((state: RootState) => state.game)

    return (
      <>
        <div className="boardCore" >
          <div className="board">
          {[...new Array(6)].map((_, wordIndex) => 
            [...new Array(5)].map((_, letterIndex) => (
              <Cell key={wordIndex+"-"+letterIndex}
                letter={data?.entredWords[wordIndex]?.words[letterIndex]?.alpha}
                letterStatus={data?.entredWords[wordIndex]?.words[letterIndex]?.status}

              />
            ))
          )}
          </div>
        </div>
      </>
    )
  }
  
  export default Board
  