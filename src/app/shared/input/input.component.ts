import { Component, Input, OnInit } from '@angular/core';
import { CreateSubject } from '../../features/Subjects/Module/dto/CreateSubject.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Survey } from '../../features/survey/Modules/Survey.module';
import { parent } from '../../features/Subjects/Module/Parent.module';
import { SubjectService } from '../../features/Subjects/Service/Subject.service';

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
