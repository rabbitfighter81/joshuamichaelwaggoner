import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ProjectBaseComponent } from '../base/project-base.component';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent extends ProjectBaseComponent implements OnInit {

  pwTypeControl = new FormControl('', [ Validators.required ]);
  lengthControl = new FormControl('', [ Validators.required ]);

  pwTypes = [
    { display: 'Alpha Numeric', value: 'alphaNum', disabled: false, warning: false },
    { display: 'ASCII', value: 'ascii', disabled: false, warning: false },
    { display: 'Hexadecimal', value: 'hex', disabled: false, warning: false },
  ];

  lengths = [
    { display: '4 Chars', value: 4 },
    { display: '6 Chars', value: 6 },
    { display: '8 Chars', value: 8 },
    { display: '10 Chars', value: 10 },
    { display: '12 Chars', value: 12 },
    { display: '14 Chars', value: 14 },
    { display: '16 Chars', value: 16 },
    { display: '18 Chars', value: 18 },
    { display: '20 Chars', value: 20 }
  ];

  charsetAlpha =
  'abcdefghijklnopqrstuvwxyz' +
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
  '0123456789';

  charsetSymbols = '?!@#$&<>[]{}()-+/*%';

  charsetHex = '0123456789ABCDEF';

  password: string;
  charset: string;

  constructor(
    public snackbar: MatSnackBar,
  ) {
    super(snackbar);
  }

  ngOnInit() {
  }

  generatePwd(length: number, charset: string): string {
    let i: any;
    let n: any;
    let retVal: any;

    retVal = '';
    i = 0;
    n = charset.length;
    while (i < length) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
      ++i;
    }
    if (retVal !== '') {
      return retVal;
    }
  }

  generateAsciiPwd(length: number): string {
    let i: number;
    let n: number;
    let offset: number;
    let random: number;
    let password: string;

    password = '';
    i = 0;
    offset = 33;
    n = 92;
    while (i < length) {
      random = Math.floor(Math.random() * n);
      password += String.fromCharCode(random + offset);
      ++i;
    }
    return password;
  }

  setPassword(): void {
    switch (this.controlType) {
      case 'alphaNum':
        this.password = this.generatePwd(this.characters, this.charsetAlpha);
        break;
      case 'hex':
        this.password = this.generatePwd(this.characters, this.charsetHex);
        break;
      case 'ascii':
        this.password = this.generateAsciiPwd(this.characters);
        break;
      default:
        this.password = this.generatePwd(this.characters, this.charsetAlpha);
        break;
    }
  }

  copy(): void {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', this.password);
  }

  get controlType(): string {
    return this.pwTypeControl.value.value;
  }

  get characters(): number {
    return this.lengthControl.value.value;
  }

}
