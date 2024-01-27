 
import {  handleSubmit} from "@/store/game";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { usePopupAction } from "@/popup/popup.context";
import { useEffect } from "react";

function Controls( ) {
    const dispatch = useDispatch<AppDispatch>()
    const store = useSelector((state: RootState) => state.game)

    const { openPopup } = usePopupAction();

    useEffect(()=>{
        if (store.gameState){
            openPopup(store.gameState)
        }
    } ,[store ,store.gameState] )
    const handleSubmitBtn=()=>{
        dispatch(handleSubmit())
    }


    return (
        <div onClick={() => handleSubmitBtn()} className="controls">

        <button disabled={store.isLoading} className="submitBtn">submit</button>
    </div>
   )
}
  
  export default Controls
  