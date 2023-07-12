import { EventEmitter } from '@angular/core';
import { Recipie } from './recipie.model';
import { ingredient } from '../shared/ingredient.model';

export class RecipieService {
    recipieSelected = new EventEmitter<Recipie>();

    private recipies: Recipie[] = [
        new Recipie(
            'A Test Recipie',
            'Testing',
            'https://www.maczfit.pl/blog/wp-content/uploads/2021/03/fast_food-960x639.jpeg',
            [new ingredient('Meat', 1)]
        ),
        new Recipie(
            'A Test Recipie',
            'Testing',
            'https://www.maczfit.pl/blog/wp-content/uploads/2021/03/fast_food-960x639.jpeg',
            [new ingredient('Beef', 1)]
        ),
    ];

    getRecipies() {
        return this.recipies.slice();
    }
}
