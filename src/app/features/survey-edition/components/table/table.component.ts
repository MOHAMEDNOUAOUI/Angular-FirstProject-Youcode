import { CreateQuestion } from './../../../../Core/DTOs/Question/CreateQuestion.module';
import { Question } from '../../../../Core/Models/Question.module';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { Subject } from '../../../../Core/Models/Subject.module';
import { Answer } from '../../../../Core/Models/Answer.module';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../Services/sharedService.service';
import { QuestionService } from '../../../../Core/Services/Question.service';
import { AnswerService } from '../../../../Core/Services/Answer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  answerlist!:Answer[];
  questionId:string | null = null;

  @Input() subject!:Subject;
  
  @Input() type!:string;
  lastQuestionId!:String;


  answerObject : any = {
    text:'',
    questionId:''
  }

  constructor(private SharedService:SharedService , private QuestionService:QuestionService , private AnswerService:AnswerService){}


  showAnswerTableWithData(questionId:string) : void {
    if(this.type === 'question' && this.lastQuestionId != questionId){
        this.SharedService.sendQuestionId(questionId);
        this.lastQuestionId = questionId;
    }
  }

  ngOnInit(): void {
      if(this.type==='answer'){
        this.SharedService.questionId$.subscribe((key) => {
          this.answerObject.questionId = key;
          this.AnswerService.getAnswerWithQuestionId(key!).subscribe({
            next:(data) => {
             this.answerlist = data;
            },
            error:(error) => {
              console.log(error);
            }
          })
        })
      }
  }

  ngOnChanges(changes : SimpleChange) : void {
    if(this.subject){
      this.Question.subjectId = this.subject.id;
    }
  }


  Question:CreateQuestion = {
    text:'',
    questionType:'',
    subjectId:''
  }

  onEnter(type : string) : void {
    
    if(type =='question'){
      this.QuestionService.createQuestion(this.Question).subscribe({
        next:(data) => {
          this.subject.questionList?.push(data);
        },
        error:(error)=> {
          console.log(error);
        }
      })
    }
    else if(type == 'answer'){
      
    }
    else{

    }
  }


}
