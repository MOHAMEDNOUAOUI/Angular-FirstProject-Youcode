import { SurveyEdition } from './../../../../../Core/Models/SurveyEdition.module';
import { Component, Input, ViewChild } from '@angular/core';
import { Survey } from '../../../../../Core/Models/Survey.module';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponentComponent } from "../../../../../shared/menu-component/menu-component.component";


@Component({
  selector: 'app-survey-item',
  standalone: true,
  imports: [MenuComponentComponent],
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
