import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GITHUB_RANDOM_PASSWORD_GENERATOR_PROJECT_URL } from './../../../app.constants';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {

  pwTypeControl = new FormControl('', [ Validators.required ]);
  pwLengthControl = new FormControl('', [ Validators.required ]);

  pwTypes = [
    { display: 'Alpha Numeric', value: 'alphaNum', disabled: false, warning: false },
    { display: 'ASCII', value: 'ascii', disabled: false, warning: false },
    { display: 'Hexadecimal', value: 'hex', disabled: false, warning: false },
    { display: 'Words', value: 'words', disabled: false, warning: true },
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

  constructor() { }

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
    let i: any;
    let n: any;
    let offset: any;
    let random: any;
    let retVal: any;

    retVal = '';
    i = 0;
    offset = 33;
    n = 92;
    while (i < length) {
      random = Math.floor(Math.random() * n);
      retVal += String.fromCharCode(random + offset);
      ++i;
    }
    return retVal;
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
      case 'words':
        this.password = 'trustno1';
        break;
    }
  }

  navToGitHubProject(): boolean {
    window.open(
      GITHUB_RANDOM_PASSWORD_GENERATOR_PROJECT_URL,
      '_blank' // <- This is what makes it open in a new window.
    );
    return false;
  }

  copy(): void {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', this.password);
  }

  get controlType(): string {
    return this.pwTypeControl.value.value;
  }

  get characters(): number {
    return this.pwLengthControl.value.value;
  }

}
