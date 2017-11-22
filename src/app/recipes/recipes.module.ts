import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {RecipesComponent} from './recipes.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipesRoutingModule} from './resipes-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ShoppingListModule} from '../shopping-list/shopping-list.module';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeListComponent,
    RecipeStartComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule,
    ShoppingListModule
  ]
})

export class RecipesModule {

}
