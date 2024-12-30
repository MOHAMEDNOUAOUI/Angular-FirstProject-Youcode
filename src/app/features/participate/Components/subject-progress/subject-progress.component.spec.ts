import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectProgressComponent } from './subject-progress.component';

describe('SubjectProgressComponent', () => {
  let component: SubjectProgressComponent;
  let fixture: ComponentFixture<SubjectProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
