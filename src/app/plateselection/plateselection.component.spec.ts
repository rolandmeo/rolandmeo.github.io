import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateselectionComponent } from './plateselection.component';

describe('PlateselectionComponent', () => {
  let component: PlateselectionComponent;
  let fixture: ComponentFixture<PlateselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlateselectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlateselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
