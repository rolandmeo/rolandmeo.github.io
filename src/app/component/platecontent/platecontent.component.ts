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
    availablePlates: Plate[] = defaultPlates();

    desiredWeight: number = 0;

    stackedPlates: Plate[] = [];

    constructor(private service: PlatestackingService) {
    }

    addPlate(plate: Plate) {
        this.availablePlates = [...this.availablePlates, plate];
        this.updateStackedPlates();
    }

    remove(id: string) {
        this.availablePlates = [...this.availablePlates.filter(p => p.id !== id)];
        this.updateStackedPlates();
    }

    reset() {
        this.availablePlates = [...defaultPlates()];
        this.updateStackedPlates();
    }

    weightChanged($event: number) {
        this.desiredWeight = $event;
        this.updateStackedPlates()
    }

    updateStackedPlates() {
        this.stackedPlates = this.service.getPlateStack((this.desiredWeight - 20) / 2, this.availablePlates);
    }

    ngOnInit(): void {
        this.updateStackedPlates();
    }
}

