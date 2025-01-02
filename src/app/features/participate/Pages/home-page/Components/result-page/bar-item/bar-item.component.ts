import { Component, Input, OnInit } from '@angular/core';
import { Answer } from '../../../../../../../Core/Models/Answer.module';

@Component({
  selector: 'app-bar-item',
  standalone: true,
  imports: [],
  templateUrl: './bar-item.component.html',
  styleUrl: './bar-item.component.css'
})
export class BarItemComponent{
  @Input() Answer!:Answer;
  @Input() CalculatedPercentage!:number;
}
