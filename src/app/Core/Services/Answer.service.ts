import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Answer } from "../Models/Answer.module";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class AnswerService{
    private url : string = "http://localhost:9000/answers";
    constructor(private http:HttpClient){}

    getAnswerWithQuestionId(QuestionId : string) : Observable<Answer[]>{
        const uri : string = `${this.url}/answerquestion/${QuestionId}`;
        return this.http.get<Answer[]>(uri)
    }

    createAnswer(Answer:any) : Observable<Answer> {
        return this.http.post<Answer>(this.url , Answer);
    }

    deleteAnswer(questionId:string) : Observable<void>{
        return this.http.delete<void>(`${this.url}/${questionId}`);
    }
}