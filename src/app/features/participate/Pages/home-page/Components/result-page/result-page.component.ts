import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
  VisibleItem:string = '';


  @ViewChild('results' , {read : ElementRef}) resultContainer!:ElementRef;

  onScrol(event: Event): void {
    const parentElement = event.target as HTMLElement;
    const childElements = this.resultContainer.nativeElement.querySelectorAll('[id]');
  
    let currentVisibleId = '';
  
    childElements.forEach((element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const visible = rect.top < 200 && rect.bottom > 0;
  
      if (visible) {
        currentVisibleId = element.id;
      }
    });
  
    if (currentVisibleId) {
        this.VisibleItem = currentVisibleId;
    }
  }
  
}
