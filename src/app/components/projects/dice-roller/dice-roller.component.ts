import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  count: number;
}

interface DiceRoll {
  value: number;
  id: number;
}

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss'],
  animations: [
    trigger('diceRolling', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('35ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%) rotate(-90deg)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px) rotate(200deg)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0) rotate(360deg)',     offset: 1.0}),
          ])),
         ]), {optional: true})
      ])
    ])
  ]
})
export class DiceRollerComponent implements OnInit {

  count$: Observable<number>;
  diceCount = Array(100).fill(undefined).map((_, i) => i + 1);
  diceSides = [ 2, 4, 6, 8, 10, 12, 16, 20, 50, 100 ];
  form: FormGroup;
  rolls: DiceRoll[] = [];
  state: any;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.count$ = store.pipe(select('count'));
    this.count$.subscribe(s => {
      this.state = s;
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      diceCount: [ '', Validators.required ],
      diceSides: [ '', Validators.required ],
    });
  }

  submitRoll(): void {
    this.rolls = new Array(Number(this.count))
      .fill(null)
      .map((_, id): DiceRoll => {
        return { value: this.getRand(), id };
      });
  }

  navToGitHubProject() {
  }

  getRand() {
    return Math.ceil(Math.random() * this.sides);
  }

  get diceSidesErrorMessage(): string {
    return this.form.get('diceSides').hasError('required')
      ? 'You must choose number of sides'
      : '';
  }

  get diceCountErrorMessage(): string {
    return this.form.get('diceCount').hasError('required')
      ? 'You must choose number of dice'
      : '';
  }

  get sides(): number {
    return this.form.get('diceSides').value;
  }

  get count(): number {
    return this.form.get('diceCount').value;
  }

  get diceRolls(): DiceRoll[] {
    return this.rolls;
  }


}
