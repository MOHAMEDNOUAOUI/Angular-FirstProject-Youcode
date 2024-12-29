import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Answer } from "../Models/Answer.module";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class AnswerService{
    private url : string = "http://localhost:9000/answers/answerquestion";
    constructor(private http:HttpClient){}

    getAnswerWithQuestionId(QuestionId : string) : Observable<Answer[]>{
        const uri : string = `${this.url}/${QuestionId}`;
        return this.http.get<Answer[]>(uri)
    }
}