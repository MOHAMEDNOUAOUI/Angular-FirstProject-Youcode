import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

import { matPlus } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-trigger-panels',
  standalone: true,
  imports: [CommonModule , NgIcon],
  templateUrl: './trigger-panels.component.html',
  styleUrl: './trigger-panels.component.css',
  viewProviders:[provideIcons({matPlus})]
})
export class TriggerPanelsComponent {

  @Input() text : string = '';
  @Input() icon : string = '';

  @Output() triggerClicked = new EventEmitter<void>();

  onClick() {
    this.triggerClicked.emit();
  }
}
