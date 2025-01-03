import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { PanelItemSearchComponent } from "../../../dashboard-admin/components/panel-admin/panel-item-search/panel-item-search.component";
import { SurveyItemComponent } from "./survey-item/survey-item.component";
import { Survey } from '../../../../Core/Models/Survey.module';
import { SurveyService } from '../../../../Core/Services/Survey.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [SurveyItemComponent,CommonModule],
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.css'
})

export class SurveyListComponent implements OnInit {

  Surveys!:Survey[];

  @Output() isSurveyExist : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() showPanel : EventEmitter<void> = new EventEmitter<void>();

  constructor(private surveyService : SurveyService){}


  ngOnInit(): void {
      this.surveyService.getSurveys().subscribe({
        next:(data) => {
          this.Surveys = data;
          this.isSurveyExist.emit(data.length > 0);
        },
        error:(error) => {
          console.log('Error fetching surveys' ,error);
          this.isSurveyExist.emit(false);
        }
      })
  }

}
