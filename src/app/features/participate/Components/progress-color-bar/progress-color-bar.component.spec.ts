import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressColorBarComponent } from './progress-color-bar.component';

describe('ProgressColorBarComponent', () => {
  let component: ProgressColorBarComponent;
  let fixture: ComponentFixture<ProgressColorBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressColorBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressColorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
