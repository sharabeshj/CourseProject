import {Component, Input, OnInit} from '@angular/core';
import {RecipeData} from '../Recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeData: RecipeData;

  constructor(public recipeService: RecipeService) {
  }

  ngOnInit(): void {
  }

}
