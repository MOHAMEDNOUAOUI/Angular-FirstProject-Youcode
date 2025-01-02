import { Component, Input } from '@angular/core';
import { Subject } from '../../../../../../../Core/Models/Subject.module';
import { QuestionHolderComponent } from '../question-holder/question-holder.component';

@Component({
  selector: 'app-sub-suject-holder',
  standalone: true,
  imports: [QuestionHolderComponent],
  templateUrl: './sub-suject-holder.component.html',
  styleUrl: './sub-suject-holder.component.css'
})
export class SubSujectHolderComponent {
  @Input() Sub!:Subject;
}
