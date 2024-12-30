import { Component, Input } from '@angular/core';
import { Subject } from '../../../../../Core/Models/Subject.module';

@Component({
  selector: 'app-subject-progress-item',
  standalone: true,
  imports: [],
  templateUrl: './subject-progress-item.component.html',
  styleUrl: './subject-progress-item.component.css'
})
export class SubjectProgressItemComponent {
  @Input() index!:number;
  @Input() subSubject!:Subject;
}
