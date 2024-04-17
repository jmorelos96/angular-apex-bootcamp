import { Component } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  public items: string[] = ["A", "B", "C"];
  public selectedItem: string = "B";
  public selectedItemIndex: {[key: string]: number} = {
    "A": 1,
    "B": 2,
    "C": 3
  };

  constructor(){}

  public getIndex(item: string): number {
    return this.selectedItemIndex[item];
  }
}
