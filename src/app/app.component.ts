import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public searchString: string = '';

  updateSearch(searchString: string) {
    this.searchString= searchString;
  }
}
