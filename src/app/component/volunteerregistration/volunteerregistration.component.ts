import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-volunteerregistration',
  templateUrl: './volunteerregistration.component.html',
  styleUrls: ['./volunteerregistration.component.css']
})
export class VolunteerregistrationComponent implements OnInit {
  isvolunteer = true;
  @Output() thisvolunteer = new EventEmitter<boolean>();
 
  toggleclosebtn(){
    this.isvolunteer = !this.isvolunteer;
    this.thisvolunteer.emit(this.isvolunteer);
  }
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
