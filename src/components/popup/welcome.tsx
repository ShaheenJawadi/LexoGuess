import { usePopupAction } from "@/popup/popup.context";

const WelcomePopup =()=>{

    const { closePopup } = usePopupAction();
    return (
        <div> 
            <div className="info" >
                <span className="heading">
                     Attempt to unveil the hidden word within six tries. 
                </span>
               
                <br />
                Submit a valid five-letter word with each guess and observe the changing tile colors, reflecting your proximity to the correct answer. 
                <br />
                Can you decode the word in just six attempts? 
                <div className="btnHolder" >
                    <button onClick={() => closePopup()}  >Challenge accepted!</button>
                </div>
                
                
                <div className="exemples" >
                    <span className="heading">
                        Examples
                    </span>
                    <div className="single" >
                        <div className="container" >
                            <div className="box correct" >
                                p
                            </div>
                            <div className="box" >
                               e
                            </div>
                            <div className="box" >
                                a
                            </div>
                            <div className="box" >
                               c
                            </div>
                            <div className="box" >
                                e
                            </div>

                        </div>
                        <div className="ins" >P is in the word and in the correct spot.</div>
                    </div> 

                    <div className="single" >
                        <div className="container" >
                            <div className="box" >
                                h
                            </div>
                            <div className="box" >
                                e
                            </div>
                            <div className="box " >
                                l
                            </div>
                            <div className="box" >
                                l
                            </div>
                            <div className="box present" >
                                o
                            </div>

                        </div>
                        <div className="ins" >O is in the word but in the wrong spot.</div>
                    </div> 



                    <div className="single" >
                        <div className="container" >
                            <div className="box" >
                                s
                            </div>
                            <div className="box" >
                               t
                            </div>
                            <div className="box" >
                                a
                            </div>
                            <div className="box absent" >
                                r
                            </div>
                            <div className="box "  >
                                t
                            </div>

                        </div>
                        <div className="ins" >R is not in the word in any spot.</div>
                    </div> 

                </div>
            </div>
          
        </div>
    )

}

export default  WelcomePopup;