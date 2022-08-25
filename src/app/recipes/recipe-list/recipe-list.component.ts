import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("Test Recipe","This is a test",
    "https://www.simplyrecipes.com/thmb/CR_kUcftRxh4KNEUzupfaFrJh1M=/3000x4500/filters:fill(auto,1)/Simply-Recipes-Brushetta-With-Tomato-And-Basil-Lead-Shot-6b-e52628e5a6f14fc3af66de40e8f5b035.jpg"),
    new Recipe("Another Test Recipe","This is another test",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
