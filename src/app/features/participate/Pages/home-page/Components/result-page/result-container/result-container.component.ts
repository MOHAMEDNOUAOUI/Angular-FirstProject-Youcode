import { Component, ElementRef, EventEmitter, Input, input, Output, ViewChild } from '@angular/core';
import { SurveyEdition } from '../../../../../../../Core/Models/SurveyEdition.module';
import { Subject } from '../../../../../../../Core/Models/Subject.module';
import { Gemini } from '../../../../../services/gemini.service';
import { CommonModule } from '@angular/common';
import { SubSujectHolderComponent } from '../sub-suject-holder/sub-suject-holder.component';

@Component({
  selector: 'app-result-container',
  standalone: true,
  imports: [CommonModule , SubSujectHolderComponent],
  templateUrl: './result-container.component.html',
  styleUrl: './result-container.component.css'
})
export class ResultContainerComponent {
  @Input() Subjects!: Subject[];
}
