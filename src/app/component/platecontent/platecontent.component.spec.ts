import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlatecontentComponent} from './platecontent.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('PlatecontentComponent', () => {
    let component: PlatecontentComponent;
    let fixture: ComponentFixture<PlatecontentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PlatecontentComponent, NoopAnimationsModule]
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
