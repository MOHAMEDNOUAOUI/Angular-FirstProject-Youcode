import { Component, Input } from '@angular/core';
import { Subject } from '../../../../../../../Core/Models/Subject.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-holder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-holder.component.html',
  styleUrl: './subject-holder.component.css'
})
export class SubjectHolderComponent {
  @Input() Subjects!:Subject[];
  @Input() visible: string = '';
}
