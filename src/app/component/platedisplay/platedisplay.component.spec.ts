import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatedisplayComponent } from './platedisplay.component';

describe('PlatedisplayComponent', () => {
  let component: PlatedisplayComponent;
  let fixture: ComponentFixture<PlatedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatedisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
