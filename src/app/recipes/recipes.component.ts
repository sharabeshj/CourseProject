import {Component, OnInit} from '@angular/core';
import {RecipeData} from './Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css', '../app.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: RecipeData;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectRecipe(data: RecipeData): void {
    this.selectedRecipe = data;
  }

}
