import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Subject } from '../../../../Core/Models/Subject.module';
import { ParticipateService } from '../../services/participate.service';
import { CommonModule } from '@angular/common';
import { retry } from 'rxjs';
import { Router } from '@angular/router';
import { SubjectProgressItemComponent } from "./subject-progress-item/subject-progress-item.component";

@Component({
  selector: 'app-subject-progress',
  standalone: true,
  imports: [CommonModule, SubjectProgressItemComponent],
  templateUrl: './subject-progress.component.html',
  styleUrl: './subject-progress.component.css'
})
export class SubjectProgressComponent{
  @Input() Subjects!: Subject[];
  subjectIndex:number = 0;
  subSubjectIndex:number = 0;
  questionIndex:number = 0;

  constructor(private ParticipateService:ParticipateService  , private router:Router){}
  
  ngOnInit(): void {
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
    if (this.subjectIndex > this.Subjects.length - 1) {
      console.log("Exceeded the limit");
      return;
    }
    
  
    const SubSubject = this.Subjects[this.subjectIndex].subSubjects!;
    if (this.subSubjectIndex > SubSubject.length - 1) {
      if(this.subjectIndex === this.Subjects.length -1){
        return;
      }
      this.ParticipateService.incrementSubjectIndex();
      this.ParticipateService.resetsubSubjectIndex();
      this.ParticipateService.resetQuestionIndex();
      return;
    }
  
    const Questions = SubSubject[this.subSubjectIndex].questionList!;
    this.ParticipateService.incrementQuestionIndex();

    if (this.questionIndex >= Questions.length) {
      if (this.subjectIndex === this.Subjects.length - 1 && 
        this.subSubjectIndex === SubSubject.length - 1) {
          this.router.navigate(["/HomePage"]);
      return;
    }
      this.ParticipateService.incrememntsubSubjectIndex();
      this.ParticipateService.resetQuestionIndex();
      return;
    }
  
  }

}
