import {Injectable} from '@angular/core';
import {comparePlate, Plate, sum} from '../model/plate.model';

@Injectable({
    providedIn: 'root'
})
export class PlatestackingService {

    getPlateStack(desiredWeight: number, plates: Plate[]): Plate[] {
        return plates.sort(comparePlate).reduce((ps, p) => {
            let intermediateSum = sum(ps);
            if ((intermediateSum + p.weight) <= desiredWeight) {
                return [...ps, p]
            }
            return ps;
        }, [] as Plate[]);
    }
}
