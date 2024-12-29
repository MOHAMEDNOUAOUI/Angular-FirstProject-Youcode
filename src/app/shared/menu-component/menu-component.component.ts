import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {ionFootsteps} from '@ng-icons/ionicons';
import { Survey } from '../../Core/Models/Survey.module';
import { CommonModule } from '@angular/common';
import { SurveyService } from '../../Core/Services/Survey.service';
import { SubjectService } from '../../Core/Services/Subject.service';
import { Subject } from '../../Core/Models/Subject.module';
import { Question } from '../../Core/Models/Question.module';
import { QuestionService } from '../../Core/Services/Question.service';
import { AnswerService } from '../../Core/Services/Answer.service';
import { Answer } from '../../Core/Models/Answer.module';
import { TriggerPanelsComponent } from "../trigger-panels/trigger-panels.component";
import { EditionPanelComponent } from "../edition-panel/edition-panel.component";

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [NgIcon, CommonModule, EditionPanelComponent],
  viewProviders:[
    provideIcons({ionFootsteps})
  ],
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.css'
})
export class MenuComponentComponent {
  @Input() survey!:Survey;
  @Input() subject!:Subject;
  @Input() subSubject!:Subject;
  @Input() question!:Question;
  @Input() answer!:Answer;
  @Input() type!:string;
  isMenuOpen=false;

  EditionPanel : boolean = false;


  constructor(private elementRef:ElementRef , 
    private SurveyService:SurveyService ,
     private SubjectService:SubjectService ,
    private QuestionService:QuestionService , 
  private AnswerService:AnswerService){}

  onClick(event:MouseEvent) {
    this.isMenuOpen = !this.isMenuOpen;
    event.stopPropagation();
  }

  OnDelete(): void{
    const confirmation = window.confirm("Are you sure you want to delete this" + this.type);
    if(confirmation){
      if(this.type=='survey'){
          this.SurveyService.deleteSUrvey(this.survey.id).subscribe({
            next:()=>{
                alert("Deleted succefulyy")
            },
            error:(error) =>{
              console.log(error);
            }
          })
      }else if(this.type ==='subject'){
        this.SubjectService.deleteSubject(this.subject.id).subscribe({
          next:()=>{
            alert("Deleted succefulyy")
        },
        error:(error) =>{
          console.log(error);
        }
        })
      }else if(this.type ==='subsubject'){
        this.SubjectService.deleteSubject(this.subSubject.id).subscribe({
          next:()=>{
            alert("Deleted succefulyy")
        },
        error:(error) =>{
          console.log(error);
        }
        })
      }else if(this.type ==='question'){
        this.QuestionService.deleteQuestion(this.question.id).subscribe({
          next:()=>{
            alert("Deleted succefulyy")
        },
        error:(error) =>{
          console.log(error);
        }
        })
      }else if(this.type ==='answer'){
        this.AnswerService.deleteAnswer(this.answer.id).subscribe({
          next:()=>{
            alert("Deleted succefulyy")
        },
        error:(error) =>{
          console.log(error);
        }
        })
      }
      else{
        console.log("Not correspondant");
      }
    }else{
      console.log("Deletion Canceled");
    }
    
  }

  @HostListener('document:click' , ['$event'])
  onOutClick(event:MouseEvent){
    if(!this.elementRef.nativeElement.contains(event.target)){
      this.isMenuOpen=false;
    }
  }


  OnUpdate() : void {
    this.EditionPanel = !this.EditionPanel;
  }

 
}
