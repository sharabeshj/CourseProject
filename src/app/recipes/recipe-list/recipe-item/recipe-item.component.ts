import {Component, Input, OnInit} from '@angular/core';
import {RecipeData} from '../../Recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeData: RecipeData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
