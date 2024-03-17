import {Component, EventEmitter, Output} from '@angular/core';
import {Plate} from '../model/plate.model';

@Component({
    selector: 'plateselection',
    standalone: true,
    imports: [],
    templateUrl: './plateselection.component.html',
    styleUrl: './plateselection.component.scss'
})
export class PlateselectionComponent {
    @Output()
    public readonly addPlate: EventEmitter<Plate> = new EventEmitter<Plate>();

    add(plate: Plate) {
        this.addPlate.emit(plate);
    }
}
