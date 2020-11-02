import { Component, OnInit } from '@angular/core';
import {MainService} from './main.service';
import { environment } from '../../environments/environment';
import {Global} from '../global';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public listSlides;
  public listPeliculas;
  public URLConecction =   environment.urlConecction;
  public global = new Global();

  constructor(public service: MainService) { }

  ngOnInit(): void {
    this.cargarSlides();
    this.cargarPeliculas();
  }

  cargarSlides() {
    
    this.service.obtenerDatosSlide().subscribe(
      response => {
        
        this.listSlides = response;

      }
    );
  }

  cargarPeliculas() {
    this.service.obtenerPeliculas().subscribe(
      response => {
        this.listPeliculas = response;
      }
    )
  }

  asignarCalificacion(calificacion, id) {
    let data = {
      idPelicula: id,
      punto: calificacion.target.value
    }
    this.service.actualizarCalificacion(data).subscribe(
      success => {
        this.global.showAlert('success', 'Calificación actualizada con éxito')
      },
      error => {
        this.global.showAlert('error', 'Error al actualizar la calificación')
      }
    );
  }

}
