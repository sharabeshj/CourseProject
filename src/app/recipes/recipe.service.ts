import {Recipe, RecipeData, RecipeInterface} from './Recipe';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/Ingredient';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipes: RecipeInterface[];
  selectedRecipe: RecipeData;
  selectRecipeEmitter: EventEmitter<RecipeData>;

  constructor(private shoppingListService: ShoppingListService) {
    this.recipes = [];
    for (let i = 0; i < 5; i++) {
      this.recipes.push(new Recipe('Recipe Name',
        'http://cdn.differencebetween.net/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg', 'description',
        [
          new Ingredient('Ingredient-1', 2),
          new Ingredient('Ingredient-2', 3)
        ]));
    }
    this.selectedRecipe = {description: '', imageUrl: '', name: ''};
    this.selectRecipeEmitter = new EventEmitter<RecipeData>();
  }

  onSelectRecipe(data: RecipeData): void {
    this.selectRecipeEmitter.emit(data);
  }

  onAddToShoppingList(recipe: RecipeData): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < recipe.ingredients.length; i++) {
      this.shoppingListService.onAdded(recipe.ingredients[i].getData());
    }
  }
}
