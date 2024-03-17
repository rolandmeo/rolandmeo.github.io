export interface Plate {
    weight: number;
    color: COLOR;
}

export type COLOR = 'RED' | 'BLUE' | 'YELLOW' | 'GREEN' | 'BLACK';

export function defaultPlates(): Plate[] {
    return [
        {color: 'RED', weight: 25},
        {color: 'BLUE', weight: 20},
        {color: 'YELLOW', weight: 15},
        {color: 'GREEN', weight: 10},
    ];
}