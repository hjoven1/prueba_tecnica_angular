import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {PeliculasService} from './peliculas.service';
import {Global} from '../global';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public formPeliculas;
  public id = 0;

  public global = new Global;

  constructor(
    private activatedRoute: ActivatedRoute, 
    public service: PeliculasService,
    public router:Router) { 

    this.activatedRoute.params.subscribe(v => {
      this.id = v.id;
    });

    this.formPeliculas = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      foto: new FormControl(null, Validators.required)
    });


  }

  ngOnInit(): void {
    if (this.id != 0 && this.id != null && this.id != undefined) {
      this.service.obtenerDatos(this.id).subscribe(
        (success) => {
          this.formPeliculas.controls.name.setValue(success.nombre);
          this.formPeliculas.controls.description.setValue(success.descripcion);
        }
      );
    }
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formPeliculas.get('foto').setValue(file);
    }
  }

  crearPelicula() {
    if (this.formPeliculas.status == 'VALID') {

      let data = new FormData();
      data.append('nombre', this.formPeliculas.controls.name.value);
      data.append('descripcion', this.formPeliculas.controls.description.value);
      data.append('archivo', this.formPeliculas.controls.foto.value);
     
      this.service.guardarData(data, this.id).subscribe(
        (success) => {
          this.global.showAlert('success','Agregado con Exito'); 
          this.router.navigate(['movies']);         
        }
      );
    } else {
      this.global.showAlert('warning','Debe llena todos los campos');  
    }
  }

}
