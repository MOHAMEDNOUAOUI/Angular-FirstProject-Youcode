import { Owner } from './Owner.module';
import { SurveyEdition } from './SurveyEdition.module';

export interface Survey {
    id: string,
    title: string,
    description: string,
    owner:Owner,
    surveyEditionList:SurveyEdition[]
}