import {Component, OnInit} from '@angular/core';
import {Ingredient, IngredientInterface} from '../shared/Ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css', '../app.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: IngredientInterface[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdded(data: { name: string, amount: number }): void {
    this.ingredients.push(new Ingredient(data.name, data.amount));
  }

}
