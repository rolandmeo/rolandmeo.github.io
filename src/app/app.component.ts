import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PlateselectionComponent} from './plateselection/plateselection.component';
import {PlatecontentComponent} from './platecontent/platecontent.component';

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
