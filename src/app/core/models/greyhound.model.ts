export interface IGreyhound {
  name: string;
  born: string;
  passed: string;
  image: string;
  descriptions: string[];
}

export class Greyhound {
  name: string;
  born: Date;
  passed: Date;
  image: string;
  descriptions: string[];

  constructor(dog: IGreyhound) {
    this.name = dog.name;
    this.born = new Date(dog.born);
    this.passed = dog.passed !== '' ? new Date(dog.passed) : null;
    this.image = dog.image;
    this.descriptions = dog.descriptions;
  }

}
