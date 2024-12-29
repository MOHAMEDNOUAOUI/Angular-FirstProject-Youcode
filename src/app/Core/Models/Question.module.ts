import { Answer } from "./Answer.module";
import { Subject } from "./Subject.module";

export interface Question{
    id:string,
    text:string,
    questionType:string,
    answerCount:number,
    answerList?:Answer[]
}