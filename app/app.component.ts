import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <body ng-app="myApp">
  <div class="container">
    <h1>Recipe </h1>
    <h3>{{currentFocus}}</h3>
      <div *ngFor = "let recipeNew of recipes">
        <h4><a (click)="showMe(recipeNew)">{{recipeNew.title}}</a></h4>
        <div *ngIf="recipeNew.canbeseen">
          <ul>
              <li>{{recipeNew.ingredients}}</li>
              <li>{{recipeNew.instructions}}</li>
          </ul>
      </div>

  </div>
  `
})

export class AppComponent{
  currentFocus: string = 'Recipe Creation';
  recipes: Recipe[] = [
  new Recipe('Peach Cobbler', 'Peaches, Brown Sugar, Flour', 'Mix everything together and bake at 450 for 30 minutes.'),
  new Recipe('Chocolate Chip Cookies', 'Chocolate Chips, Brown Sugar, Egg, Flour, Vanilla, Butter', 'Mix everything together and bake at 350 for 15 minutes.'),
  new Recipe('Moms lasagna', 'Tomatoes, Noodles, Beef, Seasoning, Cheese', 'Mix everything together and bake at 425 for 1 hour.')
];

// selectedRecipe = null;
showMe(recipeNew: Recipe){
    recipeNew.canbeseen = !recipeNew.canbeseen;
  }
}

export class Recipe {
  canbeseen: boolean = false;
  constructor(public title: string, public ingredients: string, public instructions: string){}
}
