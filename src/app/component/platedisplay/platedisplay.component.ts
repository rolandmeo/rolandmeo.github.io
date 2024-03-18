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

    plateStyle(plate: Plate) {
        return {
            color: '#fff',
            'background-image': `linear-gradient(to right, ${plate.color} 10%, oklch(from ${plate.color} calc(l * 1.25) c h) 50%, ${plate.color} 90%)`,
            'font-family': '\'Raleway\', sans-serif',
            'text-shadow': '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
            'font-weight': 800,
            'text-align': 'center',
            'text-transform': 'uppercase',
            'writing-mode': 'vertical-rl',
            'border-radius': '10px',
            'border-inline-width': '5px',
            padding: '2px',
            width: '10px',
            //height: '80%',
            margin: '0 1px 0 1px',
            'line-height': '10px',
        };
    }
}
