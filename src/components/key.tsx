import { letterStatus } from "@/types"

type props = {
    letter : string ;
    letterStatus :letterStatus;
    onClick:(l:string)=>void; 
}

const Key=(props:props)=> {
    return (
      <div onClick={()=>props.onClick(props.letter)} className={` keyboardButton ${props.letterStatus}`} >
        {props.letter}
      </div>
    )
  }
  
  export default Key
  