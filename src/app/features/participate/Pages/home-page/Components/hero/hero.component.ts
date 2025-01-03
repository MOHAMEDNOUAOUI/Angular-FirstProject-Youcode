import { Survey } from './../../../../../../Core/Models/Survey.module';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TextHeroComponent } from "../text-hero/text-hero.component";
import { SwitchButtonComponent } from "../switch-button/switch-button.component";
import { SurveyEdition } from '../../../../../../Core/Models/SurveyEdition.module';
import { SurveyService } from '../../../../../../Core/Services/Survey.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TextHeroComponent, SwitchButtonComponent , CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
    Surveys:Survey[] = [];
    SurveyEdition!:SurveyEdition;

     surveyEditionId!:string;

     @Output() ResultId = new EventEmitter<string>() ;

    constructor(private SurveyService:SurveyService , private router:Router){}

    ngOnInit(): void {
        this.SurveyService.getSurveys().subscribe({
          next:(data) => {
            this.Surveys = data;
          },
          error:(error) => {
            console.log(error);
          }
        })
    }

    putSurveyEditions(SurveyEditions : SurveyEdition[]) : void{
        const year = new Date().getFullYear();
        for(const SurveyEdition of SurveyEditions) {
          if(SurveyEdition.year == year) {
            this.surveyEditionId = SurveyEdition.id;
            this.SurveyEdition = SurveyEdition;
          }
        } 
    }

    putSurveyEditionId(id:string) : void {
      this.surveyEditionId = id;
    }

    clickedParticipate() : void {
      this.router.navigate([`/Participate/${this.surveyEditionId}`])
    }

    callResultPage() : void {
      this.ResultId.emit(this.surveyEditionId);
    }


}
