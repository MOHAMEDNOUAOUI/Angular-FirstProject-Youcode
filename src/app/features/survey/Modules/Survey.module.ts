import { SurveyEdition } from "../../survey-edition/Modules/SurveyEdition.module";
import { Owner } from "./Owner.module";

export interface Survey {
    id: string,
    title: string,
    description: string,
    owner:Owner,
    surveyEditionList:SurveyEdition[]
}