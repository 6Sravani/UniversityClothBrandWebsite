import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string='';
  password: string='';
  name:string='';
  constructor(private loginService: LoginService, private http: HttpClient,private router:Router,private userDataService:UserDataService) {}

  onSubmit(email: string, password:string,name:string) {
    alert("Welcome to MRU Clothing"+name);
    this.userDataService.name=this.name;
    this.loginService.insertLoginData(email, password,name)
    .subscribe({
      next: () => {
        console.log('Login data inserted successfully');
      },
      error: (error) => {
        console.error('Error inserting login data:', error);
      }
    });
    this.router.navigate(['/cart'])
  }
  
}
