import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "../Module/Question.module";

@Injectable({
    providedIn:"root"
})
export class QuestionService{
     private url: string = 'http://localhost:9000/question';
        constructor(private http:HttpClient){}
    
        getQuestionById(id:string): Observable<Question> {
            const uri = `${this.url}/${id}`;
            return this.http.get<Question>(uri);
        }
    
}