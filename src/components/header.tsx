import Logo from "./logo"
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { handleChangeKeywordLayout } from "@/store/game";
import { useState } from "react";

function Header() {

  const dispatch = useDispatch<AppDispatch>()
  const [keyboardLayout , setKeyBoardLayout]= useState<string>("AZ")
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
        <div onClick={() => changeKeywordLayout()} >{keyboardLayout}</div>
        <Logo/>
      </div>
    </>
  )
}

export default Header
