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
  }


  @Input() Subject: CreateSubject = {
    title:'',
    parentId:'',
    surveyEditionId:''
  };

  constructor(private SubjectService:SubjectService){}

  ngOnInit(): void {

  }

  onEnter() : void {
    this.SubjectService.createSubject(this.Subject).subscribe({
      next:() => {
        window.location.reload();
      },
      error:(error) => {
        console.log(error);
      }
    })
  }



}
