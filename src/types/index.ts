 
export type entredWordsType ={
    words:{
        alpha : string , 
        status : letterStatus , 
    }[],

}

export type letterStatus =  "absent"|"present"|"correct"|"";

export type keyboardDataType={
    absent:string ;
    present:string ;
    correct:string ; 
}