import { ReactNode } from "react";
import { usePopupAction } from "@/popup/popup.context";

type Props ={
    open : boolean ;
    children?:ReactNode;
}

const CommonPopup=(props : Props)=>{
    const { open, children }=props ;
    const { closePopup } = usePopupAction();
    if(open)
    return (
        <div  className="popupContainer">
            <div className="popupBox" >
                <div className="close" onClick={()=>closePopup()} >X</div>
                {children}
            </div>
       
        </div>
    )
    else return null
}
export default CommonPopup;