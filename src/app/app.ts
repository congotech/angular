import { Component, computed, effect, signal } from '@angular/core';
import { PlayingCard } from "./components/playing-card/playing-card";
import { Monster } from './models/monster.model';
import { SearchBar } from "./components/search-bar/search-bar";
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [PlayingCard, SearchBar]
})
export class App {
  protected readonly title = signal('playing-cards');

  monsters!: Monster[];
  count: number = 0;
  search = '';

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  })

  constructor() {

    effect(() => {
      console.log(this.selectedMonster());
    })

    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = "Pik";
    monster1.hp = 40;
    monster1.figureCaption = "No002 Pik";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Car";
    monster2.image = "/images/10.jpeg";
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption = "No003 Car";
    this.monsters.push(monster2);
  }

  increaseCount() {
    this.count++;
  }

  toggleMonster() {
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length);
  }
}
