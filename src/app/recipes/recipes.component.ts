import {Component, OnInit} from '@angular/core';
import {RecipeData} from './Recipe';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css', '../app.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  public selectedRecipe: RecipeData;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.selectedRecipe = this.recipeService.selectedRecipe;
    this.recipeService.selectRecipeEmitter.subscribe((data: RecipeData) => {
      console.log(data);
      this.selectedRecipe = data;
    });
  }
}
