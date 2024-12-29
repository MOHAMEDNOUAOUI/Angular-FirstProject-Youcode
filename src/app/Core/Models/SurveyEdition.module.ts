import { Survey } from "../../../Core/Models/Survey.module";
import { Subject } from '../../../Core/Models/Subject.module';


export interface SurveyEdition {
    id:string,
    creationDate:Date,
    startDate:Date,
    year:number,
    survey:Survey,
    subjects:Subject[]
}