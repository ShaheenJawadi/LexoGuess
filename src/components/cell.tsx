import { letterStatus } from "@/types";

type props ={
  letter : string ; 
  letterStatus : letterStatus ;
  index:number;
}

function Cell(props:props) {
  const transition = 0.4 + props.index*0.15; 
  return <div className={`cell ${props.letterStatus} `} style={{
    "transitionDuration": `${transition}s` }}>{props.letter}</div>
}
  
  export default Cell
  