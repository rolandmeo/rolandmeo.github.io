import {Component, Input} from '@angular/core';
import {Plate, sum} from '../../model/plate.model';
import {NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
    selector: 'platedisplay',
    standalone: true,
    imports: [
        NgForOf,
        NgStyle,
        NgIf
    ],
    templateUrl: './platedisplay.component.html',
    styleUrl: './platedisplay.component.scss'
})
export class PlatedisplayComponent {

    readonly BAR_WEIGHT = 20;
    @Input()
    plates: Plate[] = [];

    @Input()
    desiredWeight: number = 0;

    protected readonly sum = sum;

    verticalPlateStyle(plate: Plate) {
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
            margin: '0 1px 0 1px',
            'line-height': '10px',
        };
    }

    horizontalPlateStyle(plate: Plate) {
        return {...this.verticalPlateStyle(plate), transform: `rotate(-90deg)`, height: '5em'}
    }

    get weightReached(): boolean {
        return this.calculated >= this.desiredWeight
    }

    get calculated(): number {
        return sum(this.plates) * 2 + this.BAR_WEIGHT
    }

    summarize(): { plate: Plate, amount: number }[] {
        return this.plates.reduce((sum, p) => {
            let find = sum.find(s => s.plate.weight === p.weight);
            if (find) {
                return [...sum.filter(s => s.plate.weight != find?.plate.weight), {...find, amount: find.amount + 1}];
            }
            return [...sum, {amount: 1, plate: p}];
        }, [] as { plate: Plate, amount: number }[])
    }
}
