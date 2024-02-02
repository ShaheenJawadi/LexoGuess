import Logo from "./logo"
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { handleChangeKeywordLayout } from "@/store/game";
import { useState } from "react";

function Header() {

  const dispatch = useDispatch<AppDispatch>()
  const [keyboardLayout , setKeyBoardLayout]= useState<string>("QW")
  const changeKeywordLayout=()=>{
    
    if(keyboardLayout=="AZ"){
      setKeyBoardLayout("QW")
    }
    else {
      setKeyBoardLayout("AZ")
    }

    dispatch(handleChangeKeywordLayout())
  }

  return (
    <>
      <div className="headerCore"  >
      <div className="block">
          <div onClick={() => changeKeywordLayout()} className="KeyboardLayout">{keyboardLayout}</div>

      </div>
        <div className="block">
             <Logo/>
        </div>
     

        <div className="block"></div>
      </div>
    </>
  )
}

export default Header
