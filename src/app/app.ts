import { Component, computed, effect, model, signal } from '@angular/core';
import { PlayingCard } from "./components/playing-card/playing-card";
import { Monster } from './models/monster.model';
import { SearchBar } from "./components/search-bar/search-bar";
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule,PlayingCard, SearchBar]
})
export class App {
  protected readonly title = signal('playing-cards');

  monsters!: Monster[];
  search = model('');

  filterMonsters = computed(() => {
    // Convertir la recherche en minuscules une seule fois pour la performance
    const searchTerm = this.search().toLowerCase(); 

    // Filtrer les monstres. On convertit le nom du monstre en minuscules 
    // directement dans la condition de filtre.
    return this.monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchTerm)
    );
  })

  constructor() {

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

    const monster3 = new Monster();
    monster3.name = "Bulbe"; // ✅ Corrigé
    monster3.image = "/images/6.jpeg"; // ✅ Corrigé
    monster3.type = MonsterType.PLANT; // ✅ Corrigé
    monster3.hp = 50; // ✅ Corrigé
    monster3.figureCaption = "No004 Bulbe"; // ✅ Corrigé
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.name = "Sala"; // ✅ Corrigé
    monster4.image = "/images/7.jpeg"; // ✅ Corrigé
    monster4.type = MonsterType.FIRE; // ✅ Corrigé
    monster4.hp = 60; // ✅ Corrigé
    monster4.figureCaption = "No005 Sala"; // ✅ Corrigé
    this.monsters.push(monster4);
  }

}
