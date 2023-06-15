import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  constructor(private authService: AuthService, private router: Router, private toastrService: ToastrService) { }

  saveChanges() {
    if (!this.profileForm.valid) {
      this.toastrService.error('Enter valid data')
      return
    }
    this.authService.currentUser.firstName = this.profileForm.value.firstName;
    this.authService.currentUser.lastName = this.profileForm.value.lastName;
    this.toastrService.success('Changes saved!')
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events'])
  }

  validateLastName() {
    return this.profileForm.controls['lastName'].invalid &&
      this.profileForm.controls['lastName'].touched
  }

  validateFirstName() {
    return this.profileForm.controls['firstName'].invalid &&
      this.profileForm.controls['firstName'].touched
  }


  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    let lastName = new FormControl(this.authService.currentUser.lastName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    })

  }

}
