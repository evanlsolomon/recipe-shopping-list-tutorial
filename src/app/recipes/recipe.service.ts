import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel', 
            'Super tasty schnitzel', 
            'https://p0.pikrepo.com/preview/101/421/grilled-pork-belly-with-green-salad-thumbnail.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20),
            ]
            ),
        new Recipe(
            'Burger', 
            'This is simple a test', 
            'https://p0.pikrepo.com/preview/101/421/grilled-pork-belly-with-green-salad-thumbnail.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
            ]
            ),
      ];

      getRecipes(){
          return this.recipes.slice();
      }

}