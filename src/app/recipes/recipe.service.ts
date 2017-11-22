import {Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingridient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Цезарь с курицей',
      'Cекреты приготовления в домашних условиях',
      'http://justsovet.ru/wp-content/uploads/2017/01/salat_cezar_1.jpg',
      [
        new Ingredient('Курица', 1),
        new Ingredient('Помидоры', 2)
      ]),
    new Recipe('Фаршированные яблоки',
      'Яблоки запеченные в духовке могут',
      'http://justsovet.ru/wp-content/uploads/2017/09/104-768x512.jpg',
      [
        new Ingredient('Яблоки', 5),
        new Ingredient('Мед', 2)
      ]),
  ];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes (recipes: Recipe[]) {
    this. recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
