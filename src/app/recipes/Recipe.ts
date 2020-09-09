import {IngredientInterface} from '../shared/Ingredient';

export interface RecipeData {
  name: string;
  imageUrl: string;
  description: string;
  ingredients?: IngredientInterface[];
}

export interface RecipeInterface {
  getData: () => RecipeData;
}

export class Recipe implements RecipeInterface {
  private name: string;
  private image: URL;
  private description: string;
  private ingredients: IngredientInterface[];

  constructor(name: string, imageUrl: string, description: string, ingredients?: IngredientInterface[]) {
    this.name = name;
    this.image = new URL(imageUrl);
    this.description = description;
    this.ingredients = ingredients;
  }

  public getData(): RecipeData {
    return {
      name: this.name,
      imageUrl: this.image.toString(),
      description: this.description,
      ingredients: this.ingredients
    };
  }
}
