import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public active: boolean = false;
  constructor(){}
  public toggle(): void {
    this.active =!this.active;
  }
}
