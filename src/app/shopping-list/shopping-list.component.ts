import {Component, OnInit} from '@angular/core';
import {IngredientInterface} from '../shared/Ingredient';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css', '../app.component.css'],
})
export class ShoppingListComponent implements OnInit {

  public ingredients: IngredientInterface[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
  }

}
