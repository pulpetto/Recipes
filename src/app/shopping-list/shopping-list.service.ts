import { EventEmitter } from '@angular/core';
import { ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<ingredient[]>();

    private ingredients: ingredient[] = [
        new ingredient('apples', 5),
        new ingredient('tomatoes', 10),
        new ingredient('potatotes', 85),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
