import { Component, OnInit } from '@angular/core';
import { SurveyEdition } from './Modules/SurveyEdition.module';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyEditionService } from './Services/SurveyEdition.service';

@Component({
  selector: 'app-survey-edition',
  standalone: true,
  imports: [],
  templateUrl: './survey-edition.component.html',
  styleUrl: './survey-edition.component.css'
})
export class SurveyEditionComponent implements OnInit{
  SurveyEdition!:SurveyEdition;

  constructor(private route:ActivatedRoute , private SurveyEditionService : SurveyEditionService){}

  ngOnInit(): void {
      this.route.params.subscribe(params =>{
        const id = params['id'];
        this.SurveyEditionService.getSurveyById(id).subscribe({
          next:(data) => {
            this.SurveyEdition = data;
          },
          error:(error) => {
            console.error('Error fetching survey:', error);
          }
        })
      })
  }
}
