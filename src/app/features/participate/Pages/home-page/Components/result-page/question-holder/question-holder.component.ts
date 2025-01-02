import { Component, Input } from '@angular/core';
import { Answer } from '../../../../../../../Core/Models/Answer.module';
import { BarItemComponent } from '../bar-item/bar-item.component';


@Component({
  selector: 'app-question-holder',
  standalone: true,
  imports: [BarItemComponent],
  templateUrl: './question-holder.component.html',
  styleUrl: './question-holder.component.css'
})
export class QuestionHolderComponent {
  @Input() Answers?:Answer[];
  @Input() totalAnswers!:number;


  calculatePercentage(answerCount : number) : number {
    return Math.min(answerCount , this.totalAnswers) * 100 / this.totalAnswers;
  }
}
