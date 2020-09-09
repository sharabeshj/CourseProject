import {Ingredient, IngredientInterface} from '../shared/Ingredient';

export class ShoppingListService {
  public ingredients: IngredientInterface[];

  constructor() {
    this.ingredients = [];
  }

  onAdded(data: { name: string, amount: number }): void {
    this.ingredients.push(new Ingredient(data.name, data.amount));
  }
}
