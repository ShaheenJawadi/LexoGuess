 
export type entredWords ={
    words:{
        alpha : string , 
        status : letterStatus , 
    }[],

}

export type letterStatus =  "absent"|"present"|"correct"|"";

export type wordsData={
    absent:string ;
    present:string ;
    correct:string ; 
}