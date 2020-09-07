import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe, RecipeData, RecipeInterface} from '../Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeInterface[];
  @Output() selectRecipeEmitter: EventEmitter<RecipeData> = new EventEmitter<RecipeData>();

  constructor() {
    this.recipes = [];
    for (let i = 0; i < 5; i++) {
      this.recipes.push(new Recipe('Recipe Name',
        'http://cdn.differencebetween.net/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg', 'description'));
    }
  }

  ngOnInit(): void {
  }

  onSelectRecipe(data: RecipeData): void {
    this.selectRecipeEmitter.emit(data);
  }

}
