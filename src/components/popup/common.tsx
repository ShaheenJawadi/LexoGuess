

type Props ={
    open : boolean ;
    children?: React.ReactNode;
}

const CommonPopup=(props : Props)=>{
    const { open, children }=props ;
 
    return (
        <div>
            {children}
        </div>
    )
}
export default CommonPopup;