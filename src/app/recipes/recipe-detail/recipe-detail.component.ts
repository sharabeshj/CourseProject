import {Component, Input, OnInit} from '@angular/core';
import {RecipeData} from '../Recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeData: RecipeData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
