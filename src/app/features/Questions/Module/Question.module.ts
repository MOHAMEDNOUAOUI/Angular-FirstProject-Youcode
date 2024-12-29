import { Answer } from "../../../Answer/Modules/Answer.module";
import { Subject } from "../../Subjects/Module/Subject.module";

export interface Question{
    id:string,
    text:string,
    questionType:string,
    answerCount:number,
    answerList?:Answer[]
}