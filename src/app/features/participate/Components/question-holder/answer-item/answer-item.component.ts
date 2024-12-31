import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from '../../../../../Core/Models/Answer.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-answer-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer-item.component.html',
  styleUrl: './answer-item.component.css'
})
export class AnswerItemComponent {
  @Input() answer!:Answer;
  @Input() isActive!:boolean;

  @Output() emitToParen = new EventEmitter<string>();

  OnEmit() : void {
    this.emitToParen.emit(this.answer.id);
  }

  
}
