import { Component, Input } from '@angular/core';
import { Answer } from '../../../../../Core/Models/Answer.module';

@Component({
  selector: 'app-answer-item',
  standalone: true,
  imports: [],
  templateUrl: './answer-item.component.html',
  styleUrl: './answer-item.component.css'
})
export class AnswerItemComponent {
  @Input() answer!:Answer;
}
