import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ParticipateService } from '../../services/participate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-color-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-color-bar.component.html',
  styleUrl: './progress-color-bar.component.css'
})
export class ProgressColorBarComponent implements OnInit {
  @Input() totalQuestions!:number;
  width:string = '0%';
  @Input() step!:number

  constructor(private ParticipateService:ParticipateService){}

  ngOnInit(): void {
        this.calculateProgressBar();
  }

  ngOnChanges(changes:SimpleChanges) {
    this.calculateProgressBar();
  }

  calculateProgressBar() : void {
    const width = (Math.min(this.step , this.totalQuestions)  * 100 ) / this.totalQuestions;
    this.width=`${width}%`;
  }
}
