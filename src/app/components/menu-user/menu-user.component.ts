import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
