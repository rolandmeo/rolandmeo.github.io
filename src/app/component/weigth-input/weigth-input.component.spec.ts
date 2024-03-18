import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeigthInputComponent } from './weigth-input.component';

describe('WeigthInputComponent', () => {
  let component: WeigthInputComponent;
  let fixture: ComponentFixture<WeigthInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeigthInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeigthInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
