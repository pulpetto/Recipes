import { RecipieService } from './../recipie.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
    selector: 'app-recipie-list',
    templateUrl: './recipie-list.component.html',
    styleUrls: ['./recipie-list.component.css'],
})
export class RecipieListComponent {
    recipies: Recipie[] = [];

    constructor(private recipieService: RecipieService) {}

    ngOnInit() {
        this.recipies = this.recipieService.getRecipies();
    }
}
