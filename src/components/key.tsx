import { letterStatus } from "@/types"

type props = {
    letter : string ;
    letterStatus :letterStatus;
}

const Key=(props:props)=> {
    return (
      <div className={` keyboardButton ${props.letterStatus}`} >
        {props.letter}
      </div>
    )
  }
  
  export default Key
  