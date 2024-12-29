import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class SharedService{
    private questionIdSource = new BehaviorSubject<string | null>(null);
    questionId$ = this.questionIdSource.asObservable();

  sendQuestionId(questionId: string): void {
    this.questionIdSource.next(questionId);
  }
}