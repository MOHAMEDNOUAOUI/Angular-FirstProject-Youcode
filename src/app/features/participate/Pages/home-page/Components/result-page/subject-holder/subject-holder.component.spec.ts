import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectHolderComponent } from './subject-holder.component';

describe('SubjectHolderComponent', () => {
  let component: SubjectHolderComponent;
  let fixture: ComponentFixture<SubjectHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
