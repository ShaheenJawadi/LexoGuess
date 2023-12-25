import { letterStatus, wordsData } from "@/types";

 
export function checkLetter (letter :string ,data :wordsData):letterStatus {

    if(data.absent.includes(letter))
    {
        return 'absent'
    }

    else if(data.present.includes(letter))
    {
        return 'present'
    }

    else if(data.correct.includes(letter))
    {
        return 'correct'
    }

    return '';
}