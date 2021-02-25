import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public nome: any;
  public id: any;

  constructor(public authService: LoginService, private router: Router) {
    let seg = 0;
    document.addEventListener('mousemove', () => {seg = 0;})
    setInterval(() => {
      seg += 1;
      if (seg == 600) {
        document.location.reload();
      }
    }, 1000);
  }

  editUser() {
    var id = this.id;
    this.router.navigate([`/usuario/${id}`])
  }

  logout() {
    this.authService.logout()
  }

  ngOnInit() {
    this.nome = localStorage.getItem("nome");
    this.id = localStorage.getItem("id");
  }
}
