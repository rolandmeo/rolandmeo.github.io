export interface Plate {
    weight: number;
    color: COLOR;
    id: string; // some random string
}

export function plate(color: COLOR, weight: number): Plate {
    return {weight, color, id: `${new Date().getTime()}-${Math.random()}`}
}

export type COLOR = 'red' | 'blue' | 'yellow' | 'green' | 'black';

export function defaultPlates(): Plate[] {
    return [
        plate('red', 25),
        plate('blue', 20),
        plate('yellow', 15),
        plate('green', 10),
    ];
}

export function comparePlate(a: Plate, b: Plate): number {
    let weight = b.weight - a.weight;
    if (weight === 0) {
        return +(a.color) - +(b.color)
    }
    return weight;
}

export function sum(plates: Plate[]) {
    return plates.reduce((w, p) => w + p.weight, 0);
}