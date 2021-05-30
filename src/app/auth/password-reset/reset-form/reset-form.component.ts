import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css'],
})
export class ResetFormComponent implements OnInit {
  @Output() resetPasswordUser!: EventEmitter<{ password: string }>;
  resetPasswordForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resetPasswordUser = new EventEmitter<{ password: string }>();
  }

  ngOnInit(): void {
    this.initResetPasswordForm();
  }

  initResetPasswordForm() {
    this.resetPasswordForm = this.fb.group({
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.resetPasswordUser.emit(this.resetPasswordForm.value);
  }
}
