// user-form.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup; // Updated here with the non-null assertion operator

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Add more form controls as needed
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      // Call API to save user data
      console.log(this.userForm.value);
    }
  }
}
