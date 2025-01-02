import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SurveyEdition } from '../../../../../../Core/Models/SurveyEdition.module';
import { CommonModule } from '@angular/common';
import { ResultContainerComponent } from "./result-container/result-container.component";
import { SubjectHolderComponent } from "./subject-holder/subject-holder.component";

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [CommonModule, ResultContainerComponent, SubjectHolderComponent],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css'
})
export class ResultPageComponent {
  @Input()SurveyEdition!:SurveyEdition;

  @Output() goBacktoParent = new EventEmitter<void>();

  
}
