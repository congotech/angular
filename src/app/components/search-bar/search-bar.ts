import { Component, EventEmitter, input, Input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {

  search = model<string>('Initial');

  searchButtonClicked = output({alias: ''});

  searchClick() {
    this.searchButtonClicked.emit();
  }

}
