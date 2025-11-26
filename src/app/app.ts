import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { PlayingCard } from "./components/playing-card/playing-card";
import { Monster } from './models/monster.model';
import { SearchBar } from "./components/search-bar/search-bar";
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';
import { MonsterService } from './services/monster/monster.service';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule,PlayingCard, SearchBar]
})
export class App {
  protected readonly title = signal('playing-cards');

  monsterService = inject(MonsterService);

  monsters = signal<Monster[]>([]);
  search = model('');

  filterMonsters = computed(() => {
    // Convertir la recherche en minuscules une seule fois pour la performance
    const searchTerm = this.search().toLowerCase(); 

    // Filtrer les monstres. On convertit le nom du monstre en minuscules 
    // directement dans la condition de filtre.
    return this.monsters().filter(monster => 
        monster.name.toLowerCase().includes(searchTerm)
    );
  })

  constructor() {
    this.monsters.set(this.monsterService.getAll());
  }

  addMonster() {
    const genericMonster = new Monster();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }

}
