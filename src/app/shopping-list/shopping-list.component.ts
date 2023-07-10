import { Component } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
    ingredients: ingredient[] = [
        new ingredient('apples', 5),
        new ingredient('tomatoes', 10),
        new ingredient('potatotes', 85),
    ];

    onIngredientAdded(ingredient: ingredient) {
        this.ingredients.push(ingredient);
    }
}
