import { SubjectService } from './../../Core/Services/Subject.service';
import { Component, Input, OnInit } from '@angular/core';
import { CreateSubject } from '../../Core/DTOs/Subject/CreateSubject.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Survey } from '../../Core/Models/Survey.module';
import { parent } from '../../Core/Models/Parent.module';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  
  @Input() inputData: any = {
    InputType:'text',
    placeholder:'...',
    type:"subjects"
  }

  @Input() subjectsData :any  ={
    surveyId:null,
    parentId:null,
    subjectType:'main'
  }

  Subject: CreateSubject = {
    title:'',
    parentId:'',
    surveyEditionId:''
  };

  constructor(private SubjectService:SubjectService){}

  ngOnInit(): void {

    if(this.inputData?.surveyId){
      this.Subject.surveyEditionId =this.inputData.surveyId;
    }

    if(this.inputData?.parentId){
      this.Subject.parentId = this.inputData.parentId;
    }
  }

  onEnter() : void {
    if(this.inputData.type =="subjects"){
      this.SubjectService.createSubject(this.Subject).subscribe({
        next:() => {
          window.location.reload();
        },
        error:(error) => {
          console.error("Error in data fetching" , error);
        }
      })
    }
  }



}
