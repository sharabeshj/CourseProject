import {Component, OnInit} from '@angular/core';
import {Ingredient, IngredientInterface} from '../shared/Ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css', '../app.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: IngredientInterface[];

  constructor() {
    this.ingredients = [];
    for (let i = 0; i < 5; i++) {
      this.ingredients.push(new Ingredient('Ingredient', 10));
    }
  }

  ngOnInit(): void {
  }

}
