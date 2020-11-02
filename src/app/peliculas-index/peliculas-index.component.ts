import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaModel } from '../models/pelicula-model'
import { PeliculasIndexService } from './peliculas-index.service';
import { Global } from '../global';
import Swal from 'sweetalert2';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-peliculas-index',
  templateUrl: './peliculas-index.component.html',
  styleUrls: ['./peliculas-index.component.css']
})
export class PeliculasIndexComponent implements OnInit {

  public global: Global = new Global();
  public URLConecction = environment.urlConecction;
  public listMovies = [];

  constructor(public router: Router, public service: PeliculasIndexService) {

  }

  ngOnInit(): void {
    this.cargarTabla();
  }
 
  cargarTabla() {

    this.listMovies=[];
    this.service.obtenerPeliculas().subscribe(

      (success) => {

        success.forEach(index => {

          this.listMovies.push(new PeliculaModel(index.id, index.nombre, index.descripcion, index.fotoHashCode))

        }

        )
      },
      (error) => {

      }
    );

  }

  nuevo() {
    this.router.navigate(['movies-create']);
  }

  modificar(id) {
    this.router.navigate(['movies-edit/' + id]);
  }

  eliminar(id) {

    Swal.fire({
      title: '¿Está seguro de realizar esta acción?',
      text: "No puedes reversar una vez realizada",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, borralo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarPelicula(id).subscribe(
          (success) => {
            
            this.cargarTabla()
          },
          (error) => {
            console.log(error)
          }
        );
      }
    });




  }

}
