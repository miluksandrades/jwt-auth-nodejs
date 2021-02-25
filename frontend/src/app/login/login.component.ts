import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario = {
    email: '',
    pass: ''
  }

  constructor(private loginService: LoginService) {
  }

  login(){
    this.loginService.login(this.usuario)
  }

  ngOnInit(): void {
    localStorage.removeItem("token")
    localStorage.removeItem("nome")
    localStorage.removeItem("id")
  }

}
