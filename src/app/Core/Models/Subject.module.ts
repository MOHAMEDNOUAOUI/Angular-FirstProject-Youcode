import { SurveyEdition } from './SurveyEdition.module';
import { Question } from './Question.module';
import { parent } from './Parent.module';
export interface Subject{
    id:string,
    title:string,
    surveyEdition:SurveyEdition,
    parent?:Subject
    subSubjects?:Subject[],
    questionList?:Question[]
}