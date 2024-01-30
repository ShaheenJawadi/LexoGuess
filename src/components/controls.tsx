 
import { handleSubmit, handleNotValidWord } from "@/store/game";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { usePopupAction } from "@/popup/popup.context";
import { useEffect } from "react";

function Controls( ) {
    const dispatch = useDispatch<AppDispatch>()
    const store = useSelector((state: RootState) => state.game)

    const { openPopup , closePopup } = usePopupAction();

    useEffect(()=>{
        if (store.gameState){
            openPopup(store.gameState)
        }
        if (store.notValidWord){
            setTimeout(() => {
                dispatch(handleNotValidWord())
            },1500);
        }
   
    }, [store, store.gameState, store.notValidWord] )
    const handleSubmitBtn=()=>{
        dispatch(handleSubmit())
    }


    return (
        <>
            {store.notValidWord && <div className="">not valid word</div>}
            <div onClick={() => handleSubmitBtn()} className="controls">

                <button disabled={store.isLoading} className="submitBtn">submit</button>
            </div>
        </>
   )
}
  
  export default Controls
  