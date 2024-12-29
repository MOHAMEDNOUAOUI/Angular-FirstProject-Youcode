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
import { CreateAnswer } from '../../../../Core/DTOs/Answer/CreateAnswer.module';
import { MenuComponentComponent } from "../../../../shared/menu-component/menu-component.component";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponentComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  answerlist!:Answer[];


  @Input() subject!:Subject;
  
  @Input() type!:string;
  lastQuestionId!:String;



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
          this.Answer.questionId = key;
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

  Answer : CreateAnswer = {
    text:'',
    questionId:''
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
       this.AnswerService.createAnswer(this.Answer).subscribe({
        next:(data) => {
          this.answerlist.push(data)
        },
        error:(error) => {
          console.log(error);
        }
       })
    }
    else{

    }
  }


}
