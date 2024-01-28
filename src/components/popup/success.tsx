import { fetchRandomWord } from "@/store/game";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { usePopupAction } from "@/popup/popup.context";
const SuccessPopup = () => {

    const dispatch = useDispatch<AppDispatch>()
    const { closePopup } = usePopupAction();




    const handelClick = () => {
        dispatch(fetchRandomWord())
        closePopup()

    }


    return (
        <div>
            <div className="info" >
                <span className="heading">
                    Well Done!  
                </span>

                <br />
                Bravo! You've cracked the code and uncovered the hidden word.
                <br />
                Feel free to challenge yourself again or explore more words. 
                <div className="btnHolder" >
                    <button onClick={() => handelClick()} >Play Again</button>
                </div>



            </div>

        </div>
    )

}

export default SuccessPopup;