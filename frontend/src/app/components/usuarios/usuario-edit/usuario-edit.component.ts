import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  public dados: any;

  constructor(private service: LoginService, private toastr: ToastrService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params: Params) =>{
      const id = Number.parseInt(params['id'])
      
      this.service.getUserById(id).subscribe(res =>{
        this.dados = res;
      })
    })
    
  }

  onSubmit(f: NgForm){
    this.route.params.subscribe((params: Params) =>{
      const id = Number.parseInt(params['id'])
      
      this.service.updateUser(id, f.value).subscribe(res =>{
        var mensagem = JSON.parse(JSON.stringify(res)).mensagem;
        this.toastr.success(mensagem, 'OK');
        setTimeout(() =>{
          this.router.navigate(['/usuarios']);
        }, 1000)
      })
    })
  }

  ngOnInit(): void {
  }

}
