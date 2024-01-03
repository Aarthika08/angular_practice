import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {

  groceryItems =[
    { name:'Apples',price:2.5},
    { name:'Banana',price:6.5},
    { name:'bread',price:12.5},
    { name:'veggies',price:22.5},
    { name:'carrot',price:24.5},
    { name:'oats',price:52.5},
    { name:'chocos',price:102.5},
  ];
  showPricesAsPercentage:boolean = false;
  togglePriceDisplay()
  {
    this.showPricesAsPercentage = !this.showPricesAsPercentage;
  }

  calculateTotal(): number {
    return this.groceryItems.reduce((total, item) => total + item.price, 0);
  }
}
