import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../../../Core/Models/Question.module';
import { ParticipateModule } from '../Models/participate.module';

@Injectable({
  providedIn: 'root'
})
export class ParticipateService {
 /* private questionIndex = new BehaviorSubject<number>(0);
  questionIndex$ = this.questionIndex.asObservable();*/

  //subject indexes
  private SubjectIndex = new BehaviorSubject<number>(0);
  subjectIndex$ = this.SubjectIndex.asObservable();

  incrementSubjectIndex() : void {
    const value = this.SubjectIndex.value;
    this.SubjectIndex.next(value + 1);
  }

  resetSubjectIndex() : void{
    this.SubjectIndex.next(0);
  }
 
  //sub subject indexes 
  private subSubjectIndex = new BehaviorSubject<number>(0);
  subSubjectIndex$ = this.subSubjectIndex.asObservable();

  incrememntsubSubjectIndex() : void {
    const value = this.subSubjectIndex.value;
    this.subSubjectIndex.next(value + 1);    
  }

  resetsubSubjectIndex() : void{
    this.subSubjectIndex.next(0);
  }

  private questionIndex = new BehaviorSubject<number>(0);
  questionIndex$ = this.questionIndex.asObservable();

  incrementQuestionIndex() : void {
    const value = this.questionIndex.value;
    this.questionIndex.next(value + 1);
  }

  resetQuestionIndex() : void{
    this.questionIndex.next(0);
  }



  private QuestionWithAnswers = new BehaviorSubject<ParticipateModule[]>([]);
  questionAndAnswers$ = this.QuestionWithAnswers.asObservable();

  addQuestionWithAnswer(question: ParticipateModule): void {
    const currentQuestions = this.QuestionWithAnswers.value;
    this.QuestionWithAnswers.next([...currentQuestions, question]);
  }


}
