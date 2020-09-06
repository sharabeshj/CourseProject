export interface IngredientData {
  name: string;
  amount: number;
}

export interface IngredientInterface {
  getData: () => IngredientData;
}

export class Ingredient implements IngredientInterface {

  constructor(private name: string, private amount: number) {
  }

  getData(): IngredientData {
    return {
      name: this.name,
      amount: this.amount
    };
  }
}
