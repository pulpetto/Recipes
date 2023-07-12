import { Component } from '@angular/core';
import { Recipie } from './recipie.model';
import { RecipieService } from './recipie.service';

@Component({
    selector: 'app-recipies',
    templateUrl: './recipies.component.html',
    styleUrls: ['./recipies.component.css'],
    providers: [RecipieService],
})
export class RecipiesComponent {
    selectedRecipie: Recipie;
}
