import { EventEmitter } from '@angular/core';
import { Recipie } from './recipie.model';

export class RecipieService {
    recipieSelected = new EventEmitter<Recipie>();

    private recipies: Recipie[] = [
        new Recipie(
            'A Test Recipie',
            'Testing',
            'https://www.maczfit.pl/blog/wp-content/uploads/2021/03/fast_food-960x639.jpeg'
        ),
        new Recipie(
            'A Test Recipie',
            'Testing',
            'https://www.maczfit.pl/blog/wp-content/uploads/2021/03/fast_food-960x639.jpeg'
        ),
    ];

    getRecipies() {
        return this.recipies.slice();
    }
}
