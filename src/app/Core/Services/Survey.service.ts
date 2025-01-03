import { Injectable } from "@angular/core";
import { Survey } from "../Models/Survey.module";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SurveyCreate } from "../DTOs/Survey/CreateSurvey.module";

@Injectable({
    providedIn: "root"
})
export class SurveyService {
    private url: string = 'http://localhost:9000/surveys';
    constructor(private http : HttpClient){}

    createSurvey(survey:SurveyCreate): Observable<Survey>{
        return this.http.post<Survey>(this.url , survey);
    }

    getSurveys(): Observable<Survey[]>{
        return this.http.get<Survey[]>(this.url);
    }

    deleteSUrvey(surveyId:string):Observable<void> {
        return this.http.delete<void>(`${this.url}/${surveyId}`);
    }
}