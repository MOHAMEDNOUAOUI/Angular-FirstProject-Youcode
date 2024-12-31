import { Component, Input } from '@angular/core';
import { Subject } from '../../../../../Core/Models/Subject.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-progress-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-progress-item.component.html',
  styleUrl: './subject-progress-item.component.css'
})
export class SubjectProgressItemComponent {
  @Input() index!:number;
  @Input() subSubject!:Subject;
  @Input() done: boolean = false;
}
