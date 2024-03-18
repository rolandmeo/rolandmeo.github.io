import {Component, EventEmitter, Output} from '@angular/core';
import {plate, Plate} from '../../model/plate.model';
import {MatButton, MatFabButton, MatMiniFabButton} from '@angular/material/button';

@Component({
    selector: 'plateselection',
    standalone: true,
    imports: [
        MatButton,
        MatFabButton,
        MatMiniFabButton
    ],
    templateUrl: './plateselection.component.html',
    styleUrl: './plateselection.component.scss'
})
export class PlateselectionComponent {
    @Output()
    public readonly addPlate: EventEmitter<Plate> = new EventEmitter<Plate>();

    @Output()
    public readonly resetPlates: EventEmitter<void> = new EventEmitter<void>();

    add(plate: Plate) {
        this.addPlate.emit(plate);
    }

    reset() {
        this.resetPlates.emit();
    }

    protected readonly plate = plate;
}
