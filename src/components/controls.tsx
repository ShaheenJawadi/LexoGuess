 
import {  handleSubmit} from "@/store/game";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

function Controls( ) {
    const dispatch = useDispatch<AppDispatch>()
    const store = useSelector((state: RootState) => state.game)

    return (
    <div onClick={()=>dispatch(handleSubmit())} className="controls">

        <button disabled={store.isLoading} className="submitBtn">submit</button>
    </div>
   )
}
  
  export default Controls
  