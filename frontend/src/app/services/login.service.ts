import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AppConstants } from '../app-constants';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private route: Router, private toastr: ToastrService) { }

  getUsers() {
    return this.http.get(AppConstants.getUsers)
  }

  getUserById(id) {
    return this.http.get(AppConstants.getUserById(id))
  }

  createUser(usuario) {
    return this.http.post(AppConstants.baseUrl + 'cadastro', usuario);
  }

  updateUser(id, data) {
    return this.http.put(AppConstants.updateUser(id), data)
  }

  deleteUser(id) {
    return this.http.delete(AppConstants.deleteUser(id));
  }

  login(usuario) {
    return this.http.post(AppConstants.baseLogin, usuario).subscribe(data => {
      var token = JSON.parse(JSON.stringify(data)).Authorization;
      var nome = JSON.parse(JSON.stringify(data)).Nome;
      var id = JSON.parse(JSON.stringify(data)).Id;

      localStorage.setItem("token", token);
      localStorage.setItem("nome", nome);
      localStorage.setItem("id", id);

      this.toastr.success('Login realizado com sucesso', 'OK')

      this.route.navigate(['/inicio']).then(() =>{
        window.location.reload();
      });
    }, error => {
      this.toastr.error('Erro ao fazer login', 'Erro')
      //console.error('Erro ao fazer login');
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    })
  }

  logout() {
    if (localStorage.removeItem("token") == null) {
      localStorage.removeItem("nome");
      localStorage.removeItem("id");
      this.route.navigate(['/login'])
    }
  }

  isLoggin(): boolean {
    let authToken = localStorage.getItem("token");

    return (authToken !== null) ? true : false;
  }
}
