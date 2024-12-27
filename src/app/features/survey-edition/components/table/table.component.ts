import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from '../../../Subjects/Module/Subject.module';
import { Question } from '../../../Questions/Module/Question.module';
import { Answer } from '../../../Questions/Module/Answer.module';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../Services/sharedService.service';
import { QuestionService } from '../../../Questions/Service/Question.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  questionWithAnswers!:Question[];

  @Input() type!:string;
  @Input() questions?:Question[];
  @Input() questionId!:string;
  lastQuestionId!:String;
  constructor(private SharedService:SharedService , private QuestionService:QuestionService){}


  showAnswerTableWithData(questionId:string) : void {
    if(this.type === 'question' && this.lastQuestionId != questionId){
        this.SharedService.sendQuestionId(questionId);
        this.lastQuestionId = questionId;
    }
  }

  ngOnInit(): void {
      if(this.type==='answer'){
        this.SharedService.questionId$.subscribe((key) => {
          this.QuestionService.getQuestionById(key!).subscribe({
            next:(data) => {
              this.questionWithAnswers = data;
            }
          })
        })
      }
  }


}
