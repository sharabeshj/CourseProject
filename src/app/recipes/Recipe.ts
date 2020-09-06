export interface RecipeData {
  name: string;
  imageUrl: string;
  description: string;
}

export interface RecipeInterface {
  getData: () => RecipeData;
}

export class Recipe implements RecipeInterface {
  private name: string;
  private image: URL;
  private description: string;

  constructor(name: string, imageUrl: string, description: string) {
    this.name = name;
    this.image = new URL(imageUrl);
    this.description = description;
  }

  public getData(): RecipeData {
    return {
      name: this.name,
      imageUrl: this.image.toString(),
      description: this.description
    };
  }
}
