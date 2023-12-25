import { letterStatus } from "@/types";

type props ={
  letter : string ; 
  letterStatus : letterStatus ;
}

function Cell(props:props) {
    return <div className={ `cell ${props.letterStatus} `}>{props.letter}</div>
}
  
  export default Cell
  