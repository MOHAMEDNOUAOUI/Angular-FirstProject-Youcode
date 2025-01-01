import { Component, OnInit } from '@angular/core';
import { ParticipateService } from '../../services/participate.service';
import { ParticipateModule } from '../../Models/participate.module';
import { HeroComponent } from "./Components/hero/hero.component";
import { ResultPageComponent } from "./Components/result-page/result-page.component";
import { CommonModule } from '@angular/common';
import { SurveyEdition } from '../../../../Core/Models/SurveyEdition.module';
import { SurveyEditionService } from '../../../../Core/Services/SurveyEdition.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, ResultPageComponent , CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', [animate('500ms ease-out')]),
      transition('hidden => visible', [animate('500ms ease-in')]),
    ]),
  ],
})
export class HomePageComponent implements OnInit {
  isResultPageActive:boolean = false;
  surveyEditionId!:string;
  fadeState: 'visible' | 'hidden' = 'visible';

  SurveyEdition!:SurveyEdition;

  constructor(private ParticipateService:ParticipateService , private SurveyEditionService:SurveyEditionService){}

  ngOnInit(): void {
      this.ParticipateService.resetQuestionIndex();
      this.ParticipateService.resetSubjectIndex();
      this.ParticipateService.resetsubSubjectIndex();

      const stateComponent = localStorage.getItem('isResultPageActive');
      if(stateComponent){
        this.isResultPageActive = JSON.parse(stateComponent);
      }
      const Survey = localStorage.getItem('Survey');
      if(Survey) {
        this.SurveyEdition = JSON.parse(Survey);
      }
  }

  catchSurveyId(surveyEditionId: string): void {
    this.fadeState = 'hidden';
    setTimeout(() => {
      this.SurveyEditionService.getSurveyById(surveyEditionId).subscribe({
        next: (data) => {
          this.SurveyEdition = data;
          this.isResultPageActive = true;
          this.fadeState = 'visible';
          localStorage.setItem('isResultPageActive' , JSON.stringify(true));
          localStorage.setItem('Survey' , JSON.stringify(data));
        },
        error: (error) => {
          console.error('Error fetching survey:', error);
        },
      });
    }, 500);
  }


  resetState() : void {
    this.isResultPageActive = false;
    localStorage.setItem('isResultPageActive' , JSON.stringify(false));
  }

  wentback() : void {
    this.fadeState = 'hidden';
    setTimeout(() => {
      localStorage.removeItem('isResultPageActive');
      localStorage.removeItem('Survey');
      this.fadeState = 'visible';
      this.isResultPageActive = false;
    },500)
  }

}
