import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN,Toastr } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  constructor(private authService: AuthService,
     private router: Router,
     @Inject(TOASTR_TOKEN) private toastr:Toastr ) { }

  saveChanges() {
    if (!this.profileForm.valid) {
      this.toastr.error('Enter valid data')
      return
    }
    this.authService.currentUser.firstName = this.profileForm.value.firstName;
    this.authService.currentUser.lastName = this.profileForm.value.lastName;
    this.router.navigate(['/events']);
    this.toastr.success('Profile saved!')

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
