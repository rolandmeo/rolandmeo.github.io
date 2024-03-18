import {Component, Input} from '@angular/core';
import {Plate, sum} from '../../model/plate.model';
import {NgForOf, NgStyle} from '@angular/common';

@Component({
    selector: 'platedisplay',
    standalone: true,
    imports: [
        NgForOf,
        NgStyle
    ],
    templateUrl: './platedisplay.component.html',
    styleUrl: './platedisplay.component.scss'
})
export class PlatedisplayComponent {
    @Input()
    plates: Plate[] = [];

    protected readonly sum = sum;
}
