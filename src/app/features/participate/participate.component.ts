import { Component, OnInit } from '@angular/core';
import { ParticipateService } from './services/participate.service';
import { SurveyEdition } from '../../Core/Models/SurveyEdition.module';
import { SurveyEditionService } from '../../Core/Services/SurveyEdition.service';
import { ProgressColorBarComponent } from "./Components/progress-color-bar/progress-color-bar.component";
import { QuestionHolderComponent } from "./Components/question-holder/question-holder.component";
import { SubjectProgressComponent } from "./Components/subject-progress/subject-progress.component";
import { Router } from '@angular/router';
import { Subject } from '../../Core/Models/Subject.module';
import { ParticipateModule } from './Models/participate.module';

@Component({
  selector: 'app-participate',
  standalone: true,
  imports: [ProgressColorBarComponent, QuestionHolderComponent, SubjectProgressComponent],
  templateUrl: './participate.component.html',
  styleUrl: './participate.component.css'
})
export class ParticipateComponent implements OnInit{

  SurveyEdition!:SurveyEdition;
  surveyId : string = '1';
  
  ActiveNextButton:boolean = false;

  subjectIndex:number = 0;
  subSubjectIndex:number = 0;
  questionIndex:number = 0;

  questionCount:number = 0;

  step:number = 0;

  constructor(private ParticipateService:ParticipateService , private SurveyEditionService:SurveyEditionService , private router:Router){}

  ngOnInit(): void {
      this.SurveyEditionService.getSurveyById(this.surveyId).subscribe({
        next:(data) => {
          this.SurveyEdition = data;
          this.CalculateTheQuestion(this.SurveyEdition.subjects);
        },
        error:(error) =>{
          console.log(error);
        }
      })



      this.ParticipateService.subSubjectIndex$.subscribe((subSubjectIndex) => {
        this.subSubjectIndex = subSubjectIndex;
      });
      this.ParticipateService.subjectIndex$.subscribe((subjectIndex) => {
        this.subjectIndex = subjectIndex;
      })
      this.ParticipateService.questionIndex$.subscribe((questionIndex) => {
        this.questionIndex = questionIndex;
      })
      

  }



  increment(): void {
    if (this.subjectIndex > this.SurveyEdition.subjects.length - 1) {
      console.log("Exceeded the limit");
      return;
    }
    
  
    const SubSubject = this.SurveyEdition.subjects[this.subjectIndex].subSubjects!;
    if (this.subSubjectIndex > SubSubject.length - 1) {
      if(this.subjectIndex === this.SurveyEdition.subjects.length -1){
        return;
      }
      this.ParticipateService.incrementSubjectIndex();
      this.ParticipateService.resetsubSubjectIndex();
      this.ParticipateService.resetQuestionIndex();
      return;
    }
  
    const Questions = SubSubject[this.subSubjectIndex].questionList!;
    this.step++;
    this.ParticipateService.incrementQuestionIndex();

    if (this.questionIndex >= Questions.length) {
      if (this.subjectIndex === this.SurveyEdition.subjects.length - 1 && 
        this.subSubjectIndex === SubSubject.length - 1) {
          this.router.navigate(["/HomePage"]);
      return;
    }
      this.ParticipateService.incrememntsubSubjectIndex();
      this.ParticipateService.resetQuestionIndex();
      return;
    }
  
  }


  CalculateTheQuestion(Subjects:Subject[]) : void {
    for(const subject of Subjects){
    const SubSubjects = subject.subSubjects!;
      for(const subSubject of SubSubjects){
        this.questionCount = this.questionCount + subSubject.questionList!.length;
      }
    }
  }

}
