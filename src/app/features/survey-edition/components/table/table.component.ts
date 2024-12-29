import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from '../../../Subjects/Module/Subject.module';
import { Question } from '../../../Questions/Module/Question.module';
import { Answer } from '../../../../Answer/Modules/Answer.module';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../Services/sharedService.service';
import { QuestionService } from '../../../Questions/Service/Question.service';
import { AnswerService } from '../../../../Answer/Service/Answer.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  answerlist!:Answer[];

  @Input() type!:string;
  @Input() questions?:Question[];
  @Input() questionId!:string;
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


}
