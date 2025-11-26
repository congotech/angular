export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "water",
}

export interface IMonsterroperties {
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterroperties} = {
    [MonsterType.PLANT]: {
        imageUrl: './images/4.jpeg',
        color: 'rgba(135, 25, 124)'
    },
    [MonsterType.ELECTRIC]: {
        imageUrl: '/images/electric.jpeg',
        color: 'rgba(255, 255, 104)'
    },
    [MonsterType.FIRE]: {
        imageUrl: '/images/fire.jpeg',
        color: 'rgba(255, 104, 104)'
    },
    [MonsterType.WATER]: {
        imageUrl: '/images/water.jpeg',
        color: 'rgba(118, 235, 124)'
    },
}