import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectProgressItemComponent } from './subject-progress-item.component';

describe('SubjectProgressItemComponent', () => {
  let component: SubjectProgressItemComponent;
  let fixture: ComponentFixture<SubjectProgressItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectProgressItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectProgressItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
