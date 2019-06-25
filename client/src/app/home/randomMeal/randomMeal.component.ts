import { Component, Input } from '@angular/core';
import { FoodItem } from '../../shared/models/foodItem.model';

@Component({
  selector: 'app-random-meal',
  templateUrl: 'randomMeal.component.html',
})
export class RandomMealComponent {
  @Input()
  foodItems: FoodItem[];
  @Input()
  loading: boolean;
}
