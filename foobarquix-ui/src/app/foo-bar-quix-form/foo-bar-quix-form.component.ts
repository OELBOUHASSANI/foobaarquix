import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html'
})
export class FooBarQuixFormComponent implements OnInit {
  form: FormGroup;


  @Output() submitNumberOutput : EventEmitter<string> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  submitNumber(): void {
    this.submitNumberOutput.emit(this.form.get('inputNumber').value);
  }

  initForm() {
    this.form = this.formBuilder.group({
      inputNumber: ['', [Validators.required,  Validators.pattern('^\\d*$')]]
    });
  }
}
