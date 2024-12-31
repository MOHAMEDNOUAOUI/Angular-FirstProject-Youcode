import { Component, OnInit } from '@angular/core';
import { ParticipateService } from '../../services/participate.service';
import { ParticipateModule } from '../../Models/participate.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
   QuestionWithAnswers?: ParticipateModule[];

  constructor(private ParticipateService:ParticipateService){}

  ngOnInit(): void {
      this.ParticipateService.resetQuestionIndex();
      this.ParticipateService.resetSubjectIndex();
      this.ParticipateService.resetsubSubjectIndex();

      this.ParticipateService.questionAndAnswers$.subscribe((Array) => {
        this.QuestionWithAnswers = Array;
        console.log(this.QuestionWithAnswers);
      })
  }
}