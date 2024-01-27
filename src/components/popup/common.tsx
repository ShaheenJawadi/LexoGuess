import { ReactNode } from "react";


type Props ={
    open : boolean ;
    children?:ReactNode;
}

const CommonPopup=(props : Props)=>{
    const { open, children }=props ;
 
    return (
        <div className="popupContainer">
            <div className="popupBox" >
                {children}
            </div>
       
        </div>
    )
}
export default CommonPopup;