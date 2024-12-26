import { Injectable } from "@angular/core";
import { Survey } from "../Modules/Survey.module";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SurveyService {
    private url: string = 'http://localhost:9000/surveys';
    constructor(private http : HttpClient){}

    getSurveys(): Observable<Survey[]>{
        return this.http.get<Survey[]>(this.url);
    }
}