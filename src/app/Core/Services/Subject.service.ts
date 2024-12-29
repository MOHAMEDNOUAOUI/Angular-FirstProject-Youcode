import { CreateSubject } from './../DTOs/Subject/CreateSubject.module';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { Subject} from '../Models/Subject.module'

@Injectable({
    providedIn:'root'
})
export class SubjectService{
    private url: string = 'http://localhost:9000/subjects';
    constructor(private http:HttpClient){}

    createSubject(subject:CreateSubject) : Observable<Subject> {
        return this.http.post<Subject>(this.url , subject);
    }

    deleteSubject(subjectId:string) : Observable<void> {
        return this.http.delete<void>(`${this.url}/${subjectId}`);
    }
}