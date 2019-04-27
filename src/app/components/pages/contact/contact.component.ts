import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.getNewForm();
  }

  submit(): void {
    console.log('Submitting message...');
  }

  getNewForm(): FormGroup {
    return this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      name: [ '', Validators.required ],
      reason: [ '', Validators.required ],
      message: [ '', Validators.required ]
    });
  }

  get emailErrorMessage(): string {
    return this.form.get('email').hasError('required') ? 'You must enter a value' :
        this.form.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }

  get reasonErrorMessage(): string {
    return this.form.get('reason').hasError('required') ? 'You must enter a reason' : '';
  }

  get messageErrorMessage(): string {
    return this.form.get('message').hasError('required') ? 'You must enter a message' : '';
  }

  get nameErrorMessage(): string {
    return this.form.get('name').hasError('required') ? 'You must enter a contact name' : '';
  }

}
