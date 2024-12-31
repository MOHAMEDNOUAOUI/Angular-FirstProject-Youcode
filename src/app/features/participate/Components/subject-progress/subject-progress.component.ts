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
  @Input() subSubjects!: Subject[];
  subjectIndex:number = 0;
  subSubjectIndex:number = 0;
  questionIndex:number = 0;

  constructor(private ParticipateService:ParticipateService  , private router:Router){}
  
  ngOnInit(): void {
      this.ParticipateService.subSubjectIndex$.subscribe((subSubjectIndex) => {
        this.subSubjectIndex = subSubjectIndex;
      });
  }

  


}
