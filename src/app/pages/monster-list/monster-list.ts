import { Component, computed, inject, model, signal } from '@angular/core';
import { MonsterModel } from '../../models/monster.model';
import { SearchBar } from '../../components/search-bar/search-bar';
import { PlayingCard } from '../../components/playing-card/playing-card';
import { CommonModule } from '@angular/common';
import { MonsterService } from '../../services/monster/monster.service';

@Component({
  selector: 'app-monster-list',
  imports: [CommonModule,PlayingCard, SearchBar],
  templateUrl: './monster-list.html',
  styleUrl: './monster-list.css',
})
export class MonsterList {
  monsterService = inject(MonsterService);

  monsters = signal<MonsterModel[]>([]);
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
    const genericMonster = new MonsterModel();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }

}
