import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { MatSliderSettings } from '../../../../core/models/mat-slider-settings.model';
import { ProjectBaseComponent } from '../base/project-base.component';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent extends ProjectBaseComponent
  implements OnInit, OnDestroy {
  // Slider Settings
  sliderSettings: MatSliderSettings = {
    invert: false,
    disabled: false,
    vertical: false,
    autoTicks: true,
    showTicks: true,
    thumbLabel: true,
    step: 5,
    min: 0,
    max: 255,
    tickInterval: 5,
  };

  // Labels
  labels = {
    red: 'Pick a shade of red',
    green: 'Pick a shade of green',
    blue: 'Pick a shade of blue',
  };

  // Initial Color values
  colorValues = {
    red: 135,
    green: 200,
    blue: 85,
  };

  form: FormGroup;

  constructor(public snackbar: MatSnackBar, private fb: FormBuilder) {
    super(snackbar);
  }

  ngOnInit() {
    this.form = this.fb.group({
      red: [this.colorValues.red, [Validators.required]],
      green: [this.colorValues.green, [Validators.required]],
      blue: [this.colorValues.blue, [Validators.required]],
    });
  }

  ngOnDestroy() {}

  updateValue(field: string, value: number): void {
    this.form.get(field).setValue(value);
  }

  decToHex(decimalNumber: number): string {
    const hexidecimalNumber = decimalNumber.toString(16);
    return hexidecimalNumber.length === 1
      ? '0' + hexidecimalNumber
      : hexidecimalNumber;
  }

  rgbToHex(r: number, g: number, b: number): string {
    return '#' + this.decToHex(r) + this.decToHex(g) + this.decToHex(b);
  }

  copy(): void {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', this.hexDisplay);
  }

  get hexDisplay(): string {
    return this.rgbToHex(this.red, this.green, this.blue);
  }

  get red(): number {
    return this.form.get('red').value;
  }

  get green(): number {
    return this.form.get('green').value;
  }

  get blue(): number {
    return this.form.get('blue').value;
  }
}
