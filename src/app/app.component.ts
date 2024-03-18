import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PlateselectionComponent} from './component/plateselection/plateselection.component';
import {PlatecontentComponent} from './component/platecontent/platecontent.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, PlateselectionComponent, PlatecontentComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'rolandmeo.github.io';
}
