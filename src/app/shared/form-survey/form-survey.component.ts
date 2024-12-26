import { Component, EventEmitter, Output } from '@angular/core';
import { TriggerPanelsComponent } from "../trigger-panels/trigger-panels.component";

@Component({
  selector: 'app-form-survey',
  standalone: true,
  imports: [TriggerPanelsComponent],
  templateUrl: './form-survey.component.html',
  styleUrl: './form-survey.component.css'
})
export class FormSurveyComponent {

  @Output() closeForm = new EventEmitter<void>();

  onClose() {
    this.closeForm.emit();
  }
}
