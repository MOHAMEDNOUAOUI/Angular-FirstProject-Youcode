import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParticipateService } from '../../services/participate.service';
import { Question } from '../../../../Core/Models/Question.module';
import { parent } from '../../../../Core/Models/Parent.module';
import { AnswerItemComponent } from './answer-item/answer-item.component';
import { ProgressButtonComponent } from '../progress-button/progress-button.component';

@Component({
  selector: 'app-question-holder',
  standalone: true,
  imports: [AnswerItemComponent , ProgressButtonComponent],
  templateUrl: './question-holder.component.html',
  styleUrl: './question-holder.component.css'
})
export class QuestionHolderComponent implements OnInit {
  @Input() Question?:Question;
  QuestionIndex!:number;

  @Output() notifyTheBigParen = new EventEmitter<void>();

  constructor(private ParticipateService:ParticipateService){}

  ngOnInit(): void {
      this.ParticipateService.questionIndex$.subscribe((index) => {
        this.QuestionIndex = index;
      })
  }

  getTheResponseFromButton():void {
    this.notifyTheBigParen.emit();
  }
}
