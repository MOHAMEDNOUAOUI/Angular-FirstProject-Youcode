import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSujectHolderComponent } from './sub-suject-holder.component';

describe('SubSujectHolderComponent', () => {
  let component: SubSujectHolderComponent;
  let fixture: ComponentFixture<SubSujectHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubSujectHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSujectHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
