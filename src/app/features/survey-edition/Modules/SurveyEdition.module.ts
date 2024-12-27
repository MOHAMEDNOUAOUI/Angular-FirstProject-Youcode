import { Survey } from "../../survey/Modules/Survey.module";
import { Subject } from '../../Subjects/Module/Subject.module';


export interface SurveyEdition {
    id:string,
    creationDate:Date,
    startDate:Date,
    year:number,
    survey:Survey,
    subjects:Subject[]
}