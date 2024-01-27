 
import {  handleSubmit} from "@/store/game";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { usePopupAction } from "@/popup/popup.context";

function Controls( ) {
    const dispatch = useDispatch<AppDispatch>()
    const store = useSelector((state: RootState) => state.game)

    const { openPopup } = usePopupAction();

    const handleSubmitBtn=()=>{
        openPopup("WELCOME")
        // dispatch(handleSubmit())
    }


    return (
        <div onClick={() => handleSubmitBtn()} className="controls">

        <button disabled={store.isLoading} className="submitBtn">submit</button>
    </div>
   )
}
  
  export default Controls
  