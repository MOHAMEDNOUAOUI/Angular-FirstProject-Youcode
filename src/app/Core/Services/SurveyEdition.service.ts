import { Injectable } from "@angular/core";
import { SurveyEdition } from "../Modules/SurveyEdition.module";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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

}