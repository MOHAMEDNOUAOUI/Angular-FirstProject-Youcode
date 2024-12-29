import { Survey } from './Survey.module';


export interface Owner{
    id : string,
    name: string,
    survey:Survey[]
}