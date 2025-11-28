import { Component, computed, input, Input, InputSignal, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MonsterModel } from '../../models/monster.model';
import { MonsterTypeProperties } from '../../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css',
})
export class PlayingCard {
  monster = input(new MonsterModel());
  monsterTypeIcon = computed(() => {
    return MonsterTypeProperties[this.monster().type].imageUrl;
  })
  backgroundColor = computed(() => {
    return MonsterTypeProperties[this.monster().type].color;
  })

}
