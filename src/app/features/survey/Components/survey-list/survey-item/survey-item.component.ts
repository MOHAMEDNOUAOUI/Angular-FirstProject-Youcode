import { Component, Input } from '@angular/core';
import { Survey } from '../../../Modules/Survey.module';
import { SurveyEdition } from '../../../../survey-edition/Modules/SurveyEdition.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey-item',
  standalone: true,
  imports: [],
  templateUrl: './survey-item.component.html',
  styleUrl: './survey-item.component.css'
})
export class SurveyItemComponent {
  @Input() Survey!:Survey;

  constructor(private router:Router){}

  navigate(year : number , editionId:string){
    this.router.navigate(['/Dashboard/SurveyEdition' , year] , {
      queryParams: {editionId}
    });
  }

}
