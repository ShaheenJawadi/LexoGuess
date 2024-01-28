import { usePopupAction } from "@/popup/popup.context";

const GameOverPopup = () => {

    const { closePopup } = usePopupAction();
    return (
        <div>
            <div className="info" >
                <span className="heading">
                    Oops! All Attempts Failed  
                </span>

                <br />
                It seems like you've exhausted all your attempts, but don't be disheartened. The mystery word remains elusive, but every attempt is a step closer to the solution. You can try again and refine your strategy. 
                <br />
                Better luck next time!
                <div className="btnHolder" >
                    <button onClick={() => closePopup()}  >Try Again </button>
                </div>


             
            </div>

        </div>
    )

}

export default GameOverPopup;