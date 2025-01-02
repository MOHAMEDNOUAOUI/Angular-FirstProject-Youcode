import { Component, Input } from '@angular/core';
import { Subject } from '../../../../../../../Core/Models/Subject.module';

@Component({
  selector: 'app-subject-holder',
  standalone: true,
  imports: [],
  templateUrl: './subject-holder.component.html',
  styleUrl: './subject-holder.component.css'
})
export class SubjectHolderComponent {
  @Input() Subjects!:Subject[];
}
