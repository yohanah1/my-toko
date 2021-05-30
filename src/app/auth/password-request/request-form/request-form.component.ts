import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})
export class RequestFormComponent implements OnInit {
  @Output() resetRequestPasswordUser!: EventEmitter<{ email: string }>;
  resetRequestPasswordForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resetRequestPasswordUser = new EventEmitter<{ email: string }>();
  }

  ngOnInit(): void {
    this.initresetRequestPasswordForm();
  }

  initresetRequestPasswordForm() {
    this.resetRequestPasswordForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.resetRequestPasswordUser.emit(this.resetRequestPasswordForm.value);
  }
}
