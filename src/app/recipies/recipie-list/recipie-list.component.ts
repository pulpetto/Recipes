import { Component, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
    selector: 'app-recipie-list',
    templateUrl: './recipie-list.component.html',
    styleUrls: ['./recipie-list.component.css'],
})
export class RecipieListComponent {
    @Output() RecipieWasSelected = new EventEmitter<Recipie>();
    recipies: Recipie[] = [
        new Recipie(
            'A Test Recipie',
            'Testing',
            'https://www.maczfit.pl/blog/wp-content/uploads/2021/03/fast_food-960x639.jpeg'
        ),
    ];

    onRecipieSelected(recipie: Recipie) {
        this.RecipieWasSelected.emit(recipie);
    }
}
