import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myForm!: FormGroup;
  userData: any; // Placeholder for fetched user data

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      // Add other form controls as needed
    });

    // Fetch user data (replace with actual API call)
    this.dataService.getUserData().subscribe((data) => {
      this.userData = data;
      this.myForm.patchValue({
        name: this.userData.name,
        email: this.userData.email,
        // Update other form controls with relevant data
      });
    });
  }

  onSubmit(): void {
    // Handle form submission (e.g., update user data on the server)
    console.log(this.myForm.value);
  }
}
