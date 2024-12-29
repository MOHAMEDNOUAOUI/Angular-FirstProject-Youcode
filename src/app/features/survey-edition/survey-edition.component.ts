import { SurveyEdition } from './../../Core/Models/SurveyEdition.module';
import { Question } from '../../Core/Models/Question.module';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyEditionService } from '../../Core/Services/SurveyEdition.service';
import { Subject } from '../../Core/Models/Subject.module';
import { CommonModule } from '@angular/common';
import { TableComponent } from "./components/table/table.component";
import { Answer } from '../../Core/Models/Answer.module';
import { SharedService } from './Services/sharedService.service';
import { InputComponent } from "../../shared/input/input.component";

@Component({
  selector: 'app-survey-edition',
  standalone: true,
  imports: [CommonModule, TableComponent, InputComponent],
  templateUrl: './survey-edition.component.html',
  styleUrl: './survey-edition.component.css'
})
export class SurveyEditionComponent implements OnInit{

  SurveyEdition!:SurveyEdition;
  subject?:Subject;
  QuestionId!:string;

  showAnswerTable = false;
  selectedQuestionId?: string; 

  constructor(private route:ActivatedRoute , private router:Router ,  private SurveyEditionService : SurveyEditionService , private SharedService:SharedService){}

  ngOnInit(): void {

    const editionId = this.route.snapshot.queryParamMap.get('editionId');

    if(editionId){
      this.route.params.subscribe(params =>{
        this.SurveyEditionService.getSurveyById(editionId).subscribe({
          next:(data) => {
            this.SurveyEdition = data;
          },
          error:(error) => {
            console.error('Error fetching survey:', error);
            this.router.navigate(['Dashboard/Survey']);
          }
        })
      })
    }else{
      console.error('editionId is undefined. Redirecting to /Survey.');
      this.router.navigate(['Dashboard/Survey']);
    }


    this.SharedService.questionId$.subscribe((id) => {
      if(id){
          this.showAnswerTable= true;
          this.selectedQuestionId = id;
      }
    })

  }

  passDataToSubjectComponent(subject : Subject) : void{
      this.subject = subject;
  }



}
