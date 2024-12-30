import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-progress-button',
  standalone: true,
  imports: [],
  templateUrl: './progress-button.component.html',
  styleUrl: './progress-button.component.css'
})
export class ProgressButtonComponent {
  @Input() type!:string;
  @Output() parentNotification = new EventEmitter<void>();

  notifyParen():void {
    this.parentNotification.emit();
  }
}
