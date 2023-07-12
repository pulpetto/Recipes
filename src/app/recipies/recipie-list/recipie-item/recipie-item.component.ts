import { RecipieService } from './../../recipie.service';
import { Component, Input } from '@angular/core';
import { Recipie } from '../../recipie.model';

@Component({
    selector: 'app-recipie-item',
    templateUrl: './recipie-item.component.html',
    styleUrls: ['./recipie-item.component.css'],
})
export class RecipieItemComponent {
    @Input() recipie: Recipie;

    constructor(private recipieService: RecipieService) {}

    onSelected() {
        this.recipieService.recipieSelected.emit(this.recipie);
    }
}
