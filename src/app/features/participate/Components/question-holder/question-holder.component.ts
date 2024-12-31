import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParticipateService } from '../../services/participate.service';
import { Question } from '../../../../Core/Models/Question.module';
import { parent } from '../../../../Core/Models/Parent.module';
import { AnswerItemComponent } from './answer-item/answer-item.component';
import { ProgressButtonComponent } from '../progress-button/progress-button.component';
import { CommonModule } from '@angular/common';
import { ParticipateModule } from '../../Models/participate.module';

@Component({
  selector: 'app-question-holder',
  standalone: true,
  imports: [AnswerItemComponent , ProgressButtonComponent , CommonModule],
  templateUrl: './question-holder.component.html',
  styleUrl: './question-holder.component.css'
})
export class QuestionHolderComponent implements OnInit {
  @Input() Question?:Question;
  
  buttonActive:boolean = false;

  QuestionIndex!:number;
  isActiveAnswer!:string;
  isActiveAnswers:string[] = [];

  @Output() notifyTheBigParen = new EventEmitter<void>();

  constructor(private ParticipateService:ParticipateService){}

  ngOnInit(): void {
      this.ParticipateService.questionIndex$.subscribe((index) => {
        this.QuestionIndex = index;
      })
  }

  getTheResponseFromButton():void {
   if(this.Question?.questionType==='SINGLE_CHOICE'){
      const QuestionAnswer : ParticipateModule = {questionId:this.Question.id , answerId:this.isActiveAnswer};
      this.ParticipateService.addQuestionWithAnswer(QuestionAnswer);
   }else if(this.Question?.questionType === 'MULTIPLE_CHOICE'){
      const Question : ParticipateModule = {questionId:this.Question.id , answers:this.isActiveAnswers.map((answer) => ({
      answerId:answer
    }))};
    this.ParticipateService.addQuestionWithAnswer(Question);
   }
    this.buttonActive = !this.buttonActive;
    this.notifyTheBigParen.emit();
  }

  clickedOnAnswer(answerId : string) : void{
    if(this.Question?.questionType === 'SINGLE_CHOICE'){
      this.isActiveAnswer = answerId;
    }else{
      const index = this.isActiveAnswers.indexOf(answerId);
      if (index === -1) {
        this.isActiveAnswers.push(answerId); 
      } else {
        if(this.isActiveAnswers.length > 1){
          this.isActiveAnswers.splice(index, 1);
        }
      }
    }

    this.buttonActive=true;
  }


}
