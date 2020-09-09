import {Component, OnInit} from '@angular/core';
import {RecipeData, RecipeInterface} from '../Recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: RecipeInterface[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.recipes;
  }

  onSelectRecipe(data: RecipeData): void {
    this.recipeService.onSelectRecipe(data);
  }

}
