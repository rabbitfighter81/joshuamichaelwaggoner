import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Animations } from '../../../../core/animations/animations';
import { DiceRoll } from '../../../../core/models/dice-roll.model';
import { ProjectBaseComponent } from '../base/project-base.component';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss'],
  animations: [Animations.diceRolling],
})
export class DiceRollerComponent extends ProjectBaseComponent
  implements OnInit {
  diceCount = Array(100)
    .fill(undefined)
    .map((_, i) => i + 1);
  diceSides = [2, 4, 6, 8, 10, 12, 16, 20, 50, 100];
  form: FormGroup;
  rolls: DiceRoll[] = [];
  state: any;

  constructor(public snackbar: MatSnackBar, private fb: FormBuilder) {
    super(snackbar);
  }

  ngOnInit() {
    this.form = this.fb.group({
      diceCount: ['', Validators.required],
      diceSides: ['', Validators.required],
    });
  }

  submitRoll(): void {
    this.rolls = new Array(Number(this.count)).fill(null).map(
      (_, id): DiceRoll => {
        return { value: this.getRand(), id };
      },
    );
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
