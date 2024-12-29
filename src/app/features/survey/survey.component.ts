import { Component } from '@angular/core';
import { SurveyListComponent } from "./Components/survey-list/survey-list.component";
import { TriggerPanelsComponent } from "../../shared/trigger-panels/trigger-panels.component";
import { Survey } from '../../Core/Models/Survey.module';
import { CommonModule } from '@angular/common';
import { FormSurveyComponent } from "../../shared/form-survey/form-survey.component";

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [SurveyListComponent, TriggerPanelsComponent, CommonModule, FormSurveyComponent],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent {
  SurveyExist: boolean = false;
  FormVisible:boolean = false;

  toggleForm() {
    this.FormVisible = true;
  }

  toggleFormClose() {
    this.FormVisible = false;
  }

  handleSurveyExist(event : boolean) :void {
    this.SurveyExist = event;
  }

}
