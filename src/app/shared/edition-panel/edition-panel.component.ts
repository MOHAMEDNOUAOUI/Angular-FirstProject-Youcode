import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TriggerPanelsComponent } from '../trigger-panels/trigger-panels.component';
import { Survey } from '../../Core/Models/Survey.module';
import { FormsModule } from '@angular/forms';
import { SurveyEdition } from '../../Core/Models/SurveyEdition.module';
import { CreateSurveyEdition } from '../../Core/DTOs/SurveyEdition/CreateSurveyEdition.module';
import { SurveyEditionService } from '../../Core/Services/SurveyEdition.service';

@Component({
  selector: 'app-edition-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edition-panel.component.html',
  styleUrl: './edition-panel.component.css'
})
export class EditionPanelComponent implements OnInit {
  EditionPanel : boolean = false;
  @Output() triggerClicked = new EventEmitter<void>();
  @Input() surveyId!:string;
  SurveyEdition:CreateSurveyEdition = {
        creationDate:'',
        startDate:'',
        year:0,
        surveyId:'',
  };

  date : any  = {
    todayFront:'',
    today:'',
    year:''
  }

  constructor(private SurveyEditionService:SurveyEditionService){
    const todayDate = new Date();
    this.date.todayFront=todayDate.toISOString().split('T')[0];
    this.date.today = todayDate.toISOString();
    this.date.year = todayDate.getFullYear();
    this.SurveyEdition.creationDate = this.date.today;
    this.SurveyEdition.startDate = this.date.today;
    this.SurveyEdition.year = this.date.year;
  }

  ngOnInit(): void {
    console.log(this.surveyId);
      if(this.surveyId){
        this.SurveyEdition.surveyId = this.surveyId;
      }
  }
  

  // to create edition
 

  onCreate() : void {
    if(!this.isValid){
      console.log("something wrong");
      return;      
    }
    
      this.SurveyEditionService.createSurveyEdition(this.SurveyEdition).subscribe({
        next:(data) => {
          window.location.reload();
        },
        error:(error) => {
          console.log(error);
        }
      })
  }

  isValid(): boolean {
    if (!this.SurveyEdition.creationDate || !this.SurveyEdition.startDate || this.SurveyEdition.year <= 0) {
      return false;
    }

    const creationDate = new Date(this.SurveyEdition.creationDate);
    const startDate = new Date(this.SurveyEdition.startDate);
    if (startDate < creationDate) {
      return false;
    }


    return true;
  }


  onClose() : void {
    this.triggerClicked.emit();
  }
}
