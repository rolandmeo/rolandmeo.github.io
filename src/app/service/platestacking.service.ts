import {Injectable} from '@angular/core';
import {comparePlate, Plate} from '../model/plate.model';

@Injectable({
    providedIn: 'root'
})
export class PlatestackingService {

    getPlateStack(desiredWeight: number, plates: Plate[]): Plate[] {
        plates.sort(comparePlate);
        return plates.sort(comparePlate);
    }
}
