import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: any;

  public userForm = {
    nome: '',
    email: '',
    pass: '',
    cpass: '',
    setor: ''
  }

  constructor(private users: LoginService, private toastr: ToastrService) {
    this.users.getUsers().subscribe(res =>{
      this.usuarios = res;
    })
  }

  createUser(){
    var form = {
      nome: this.userForm.nome,
      email: this.userForm.email,
      pass: this.userForm.pass,
      setor: this.userForm.setor,
    }
    this.users.createUser(form).subscribe(res =>{
      var mensagem = JSON.parse(JSON.stringify(res)).mensagem;
      this.toastr.success(mensagem, 'Sucesso')
      
      setTimeout(() =>{
        document.location.reload();
      }, 1000)
    })
  }
  
  deleteUser(id){
    this.users.deleteUser(id).subscribe(res => {
      var mensagem = JSON.parse(JSON.stringify(res)).mensagem;
      this.toastr.success(mensagem, 'Sucesso')
      setTimeout(() =>{
        document.location.reload();
      }, 2000)
    })
  }

  ngOnInit(): void {
  }

}
