const Key=({ letter  }:{ letter:string})=> {
    return (
      <div className={` keyboardButton`} >
        {letter}
      </div>
    )
  }
  
  export default Key
  