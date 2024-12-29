import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateSubject } from "../Module/dto/CreateSubject.module";
import { Observable} from "rxjs";
import { Subject} from '../Module/Subject.module'

@Injectable({
    providedIn:'root'
})
export class SubjectService{
    private url: string = 'http://localhost:9000/subjects';
    constructor(private http:HttpClient){}

    createSubject(subject:CreateSubject) : Observable<Subject> {
        return this.http.post<Subject>(this.url , subject);
    }
}