import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatecontentComponent } from './platecontent.component';

describe('PlatecontentComponent', () => {
  let component: PlatecontentComponent;
  let fixture: ComponentFixture<PlatecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatecontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
