import { MonsterType } from "../utils/monster.utils";

export class Monster {
    id: number = -1;
    name: string = "My Monster";
    image: string = "/images/4.jpeg";
    type: MonsterType = MonsterType.ELECTRIC;
    hp: number = 40;
    figureCaption: string = "No001 Monster";
    attackname: string = "Geo Impact"
    attackStrength: number = 60;
    attackDescription: string = "This is a long description of a monster attack. Probably somthing to do with electricity"

    copy(): Monster {
        return Object.assign(new Monster(), this)
    }
}