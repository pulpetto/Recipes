import { Component, ElementRef, ViewChild } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
    @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
    @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

    constructor(private slService: ShoppingListService) {}

    onAddItem() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingVal = this.nameInputRef.nativeElement.value;
        const newIngredient = new ingredient(ingName, ingVal);
        this.slService.addIngredient(newIngredient);
    }
}
