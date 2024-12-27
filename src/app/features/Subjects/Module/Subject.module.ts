import { Question } from '../../Questions/Module/Question.module';
import { SurveyEdition } from '../../survey-edition/Modules/SurveyEdition.module';
import { parent } from './Parent.module';
export interface Subject{
    id:string,
    title:string,
    surveyEdition:SurveyEdition,
    parent?:Subject
    subSubjects?:Subject[],
    questionList?:Question[]
}