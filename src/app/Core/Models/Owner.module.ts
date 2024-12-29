import { Survey } from "../../../Core/Models/Survey.module";


export interface Owner{
    id : string,
    name: string,
    survey:Survey[]
}