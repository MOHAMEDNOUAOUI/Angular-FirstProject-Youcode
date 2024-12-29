import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TriggerPanelsComponent } from "../trigger-panels/trigger-panels.component";
import { SwitchInputComponent } from "../switch-input/switch-input.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SurveyCreate } from '../../Core/DTOs/Survey/CreateSurvey.module';
import { SurveyService } from '../../Core/Services/Survey.service';

@Component({
  selector: 'app-form-survey',
  standalone: true,
  imports: [TriggerPanelsComponent, SwitchInputComponent , FormsModule , CommonModule],
  templateUrl: './form-survey.component.html',
  styleUrl: './form-survey.component.css'
})
export class FormSurveyComponent {

  //design to close the give the button emitation to close the form
  Class : string = '';
  @Output() closeForm = new EventEmitter<void>();
  ownerId!:string;

  onClose() {
    this.closeForm.emit();
  }

  survey: SurveyCreate = {
    title:'',
    description:'',
    ownerId:''
  };


  constructor(private SurveyService:SurveyService){}

  onSubmit(){
    if(this.survey && this.survey.ownerId != ''){
      this.SurveyService.createSurvey(this.survey).subscribe({
        next:(response) => {
          window.location.reload();
        },
        error:(error) => {
          console.log("Error creating survey" , error);
        }
      })
    }else{
      alert('Please fill out all fields and select an owner.');
    }
  }

  ownerSelect(ownerId:string) :void {
    this.survey.ownerId = ownerId;
  } 

}
