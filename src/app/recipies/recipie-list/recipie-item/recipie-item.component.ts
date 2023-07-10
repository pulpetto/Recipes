import { Component } from '@angular/core';
import { Recipie } from '../../recipie.model';

@Component({
    selector: 'app-recipie-item',
    templateUrl: './recipie-item.component.html',
    styleUrls: ['./recipie-item.component.css'],
})
export class RecipieItemComponent {
    recipie: Recipie;
}
