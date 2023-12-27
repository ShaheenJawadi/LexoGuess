

type logoType ={
    letter:string, 
    cName :string[]
}

const  Logo=() =>{
  const logoStructure:logoType[]=[
        {
            letter:"L",
            cName:["boxed" , "correctColor"]
        },
        {
            letter:"e",
            cName:[ ]
        },
        {
            letter:"x",
            cName:["boxed" , "presentColor"]
        },
        {
            letter:"o",
            cName:[ ]
        },
        {
            letter:"G",
            cName:["boxed" , "correctColor"]
        },
        {
            letter:"u",
            cName:[ ]
        },
        {
            letter:"e",
            cName:[ "boxed" , "absentColor"]
        },
        {
            letter:"s",
            cName:[]
        },
        {
            letter:"s",
            cName:["boxed" , "presentColor"]
        },
    ]

    return (
      <>
        <div className="logo"  >

            {
               logoStructure.map((item , index)=>(
                <span key={index} className={item.cName.join(' ')} >{item.letter}</span>
               )) 
            }
           
          
        </div>
      </>
    )
  }
  
  export default Logo
  