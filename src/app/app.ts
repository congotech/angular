import { Component, signal } from '@angular/core';
import { PlayingCard } from "./components/playing-card/playing-card";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [PlayingCard]
})
export class App {
  protected readonly title = signal('playing-cards');
}
