import { useDispatch  } from "react-redux";
import { AppDispatch } from "@/store";
import {  handleSubmit} from "@/store/game";


function Controls( ) {
    const dispatch = useDispatch<AppDispatch>()
     

    return (
    <div onClick={()=>dispatch(handleSubmit())} className="controls">

        <button className="submitBtn">submit</button>
    </div>
   )
}
  
  export default Controls
  