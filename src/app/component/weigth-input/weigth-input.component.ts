import {Component, EventEmitter, Output} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'weight-input',
    standalone: true,
    imports: [
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './weigth-input.component.html',
    styleUrl: './weigth-input.component.scss'
})
export class WeigthInputComponent {
    @Output()
    weightChanged: EventEmitter<number> = new EventEmitter<number>();

    desiredWeight = 0;

    emitWeight() {
        this.weightChanged.emit(this.desiredWeight);
    }
}
