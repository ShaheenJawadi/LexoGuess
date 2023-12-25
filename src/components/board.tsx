import Cell from "./cell"


function Board() {


    return (
      <>
        <div className="boardCore" >
          <div className="board">
          {[...new Array(30)].map((_, index) => (
          <Cell />
        ))}
          </div>
        </div>
      </>
    )
  }
  
  export default Board
  