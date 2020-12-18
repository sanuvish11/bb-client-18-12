import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      middle_name: user.middle_name,
      phone_no: user.phone_no,
      last_name: user.last_name,
      gender: user.gender,
      city: user.city,
      state: user.state,
      yob: user.yob,
      time_zone: user.time_zone,
      church_name: user.church_name,
      paster_name: user.paster_name,
      church_city: user.church_city,
      church_state: user.church_state,
      created_by: user.created_by,
      modify_by: user.modify_by,
     
    }, httpOptions);
    console.log(user.username)
    console.log(user.password)
    console.log(user.last_name)
  }
  
}

