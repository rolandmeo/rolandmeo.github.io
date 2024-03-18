import {Component, OnInit} from '@angular/core';
import {PlateselectionComponent} from '../plateselection/plateselection.component';
import {defaultPlates, Plate} from '../../model/plate.model';
import {MatChip, MatChipGrid, MatChipRow, MatChipSet} from '@angular/material/chips';
import {MatIcon} from '@angular/material/icon';
import {MatFormField} from '@angular/material/form-field';
import {PlatestackingService} from '../../service/platestacking.service';
import {WeigthInputComponent} from '../weigth-input/weigth-input.component';
import {PlatedisplayComponent} from '../platedisplay/platedisplay.component';
import {MatExpansionPanelActionRow} from '@angular/material/expansion';

@Component({
    selector: 'platecontent',
    standalone: true,
    imports: [
        PlateselectionComponent,
        MatChipGrid,
        MatIcon,
        MatChipRow,
        MatChipSet,
        MatFormField,
        WeigthInputComponent,
        PlatedisplayComponent,
        MatChip,
        MatExpansionPanelActionRow,
    ],
    templateUrl: './platecontent.component.html',
    styleUrl: './platecontent.component.scss'
})
export class PlatecontentComponent implements OnInit {
    plates: Plate[] = defaultPlates();

    desiredWeight: number = 0;

    stackedPlates: Plate[] = [];

    constructor(private service: PlatestackingService) {
    }

    addPlate(plate: Plate) {
        this.plates = [...this.plates, plate];
        this.updateStackedPlates();
    }

    remove(id: string) {
        this.plates = [...this.plates.filter(p => p.id !== id)];
        this.updateStackedPlates();
    }

    reset() {
        this.plates = [...defaultPlates()];
        this.updateStackedPlates();
    }

    weightChanged($event: number) {
        this.desiredWeight = $event;
        this.updateStackedPlates()
    }

    updateStackedPlates() {
        this.stackedPlates = this.service.getPlateStack(this.desiredWeight, this.plates);
    }

    ngOnInit(): void {
        this.stackedPlates = this.service.getPlateStack(this.desiredWeight, this.plates);
    }
}

