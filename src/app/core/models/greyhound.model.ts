import { getCorrectTime } from '../helpers/correct-time.helper';

export interface IGreyhound {
  born: string;
  color: string;
  descriptions: string[];
  earmark: string;
  image: string;
  kg: string;
  land: string;
  lbs: string;
  name: string;
  passed: string;
  racingowners: string[];
  route: string;
  sex: string;
}

export class Greyhound {
  born: Date;
  color: string;
  descriptions: string[];
  earmark: string;
  image: string;
  kg: number;
  land: string;
  lbs: number;
  name: string;
  passed: Date;
  racingowners: string[];
  route: string;
  sex: string;

  constructor(dog: IGreyhound) {
    this.born = getCorrectTime(dog.born);
    this.color = dog.color;
    this.descriptions = dog.descriptions;
    this.earmark = dog.earmark;
    this.image = dog.image;
    this.kg = parseInt(dog.kg, 10);
    this.land = dog.land;
    this.lbs = parseInt(dog.lbs, 10);
    this.name = dog.name;
    this.passed = dog.passed.length ? getCorrectTime(dog.passed) : null;
    this.racingowners = dog.racingowners;
    this.route = dog.route;
    this.sex = dog.sex;
  }
}
