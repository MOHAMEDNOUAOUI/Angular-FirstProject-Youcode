import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionPanelComponent } from './edition-panel.component';

describe('EditionPanelComponent', () => {
  let component: EditionPanelComponent;
  let fixture: ComponentFixture<EditionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
