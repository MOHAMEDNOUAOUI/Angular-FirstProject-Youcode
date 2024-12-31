import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-progress-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-button.component.html',
  styleUrl: './progress-button.component.css'
})
export class ProgressButtonComponent {
  @Input() type!:string;
  @Output() parentNotification = new EventEmitter<void>();
  @Input() showButton!:boolean;


  notifyParen():void {
    this.parentNotification.emit();
  }
}
