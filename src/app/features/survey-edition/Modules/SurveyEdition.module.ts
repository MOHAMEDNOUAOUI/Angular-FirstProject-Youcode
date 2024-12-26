import { Survey } from "../../survey/Modules/Survey.module";


export interface SurveyEdition {
    id:string,
    creationDate:Date,
    startDate:Date,
    year:number,
    survey:Survey
}