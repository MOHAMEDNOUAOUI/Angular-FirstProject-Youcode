import { SurveyEdition } from './../Models/SurveyEdition.module';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CreateSurveyEdition } from '../DTOs/SurveyEdition/CreateSurveyEdition.module';

@Injectable({
    providedIn:'root',
})
export class SurveyEditionService{
    private url: string = 'http://localhost:9000/survey-edition';
    constructor(private http:HttpClient){}

    getSurveyById(id:string): Observable<SurveyEdition> {
        const uri = `${this.url}/${id}`;
        return this.http.get<SurveyEdition>(uri);
    }

    createSurveyEdition(SurveyEdition:CreateSurveyEdition) :Observable<SurveyEdition> {
        return this.http.post<SurveyEdition>(this.url , SurveyEdition);
    }

}