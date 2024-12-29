import { Subject } from './Subject.module';
import { Survey } from './Survey.module';



export interface SurveyEdition {
    id:string,
    creationDate:Date,
    startDate:Date,
    year:number,
    survey:Survey,
    subjects:Subject[]
}