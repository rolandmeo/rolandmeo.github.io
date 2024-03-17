import {Component} from '@angular/core';
import {PlateselectionComponent} from '../plateselection/plateselection.component';
import {Plate} from '../model/plate.model';
import {MatChipGrid, MatChipRow} from '@angular/material/chips';
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'platecontent',
    standalone: true,
    imports: [
        PlateselectionComponent,
        MatChipGrid,
        MatIcon,
        MatChipRow
    ],
    templateUrl: './platecontent.component.html',
    styleUrl: './platecontent.component.scss'
})
export class PlatecontentComponent {
    plates: Plate[] = [
        {color: 'RED', weight: 25},
        {color: 'BLUE', weight: 20},
        {color: 'YELLOW', weight: 15},
        {color: 'GREEN', weight: 10},
    ];

    addPlate(plate: Plate) {
        this.plates = [...this.plates, plate];
    }

    remove(plate: Plate) {
        this.plates = [...this.plates.filter(p => plate.weight !== p.weight && plate.color !== p.color)];
    }
}
