import { Survey } from './../../../../../../Core/Models/Survey.module';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SurveyEdition } from '../../../../../../Core/Models/SurveyEdition.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-button.component.html',
  styleUrl: './switch-button.component.css'
})
export class SwitchButtonComponent {
  @Input() Surveys!:Survey[];
  @Input() SurveyEditions?:SurveyEdition[];
  @Input() type!:string;


  @Output() emitSurveyEdition = new EventEmitter<SurveyEdition[]>();

  @Output() emitSurveyEditionId = new EventEmitter<string>();


  onChange(event:Event) : void {
    const selectedId = (event.target as HTMLSelectElement).value;
    const selectedSurvey = this.Surveys.find(survey => survey.id.toString() === selectedId);
    this.emitSurveyEdition.emit(selectedSurvey?.surveyEditionList)
  }

  onSurveyEditionChange(event:Event) : void {
    const selectedId = (event.target as HTMLSelectElement).value;
    this.emitSurveyEditionId.emit(selectedId);
  } 

  



}
