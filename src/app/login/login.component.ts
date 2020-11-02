import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {LoginServiceService} from './login-service.service'
import { Router } from '@angular/router';
import {Global} from '../global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form;
  public global: Global;

  constructor(public http: HttpClient, public service: LoginServiceService, public router: Router) { 
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
    this.global = new Global();
  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    this.form.updateValueAndValidity();
    if (this.form.status == "INVALID") {
      alert('DEBE LLENAR LOS CAMPOS')
    } else {
      let data = {
        "data": {
          "nombreUsuario":"judapagon1996@hotmail.es",
          "clave":"Julieth10"
        }
      }
      this.service.login(data).subscribe(
        (success) => {
          if (success.error == 0) {
            localStorage.setItem('token', success.usuario.tokenSSO)
            this.router.navigate(['home']);
          } else {
            this.global.showAlert('error', success.response);
          }
        },
        (error) => {
          localStorage.setItem('token', 'pruebaToken')
          this.router.navigate(['home']);
          console.log(error);
          
        }
      );
    }
  }

}
