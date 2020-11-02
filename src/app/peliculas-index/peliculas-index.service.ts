import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, catchError,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasIndexService {

  private URLConecction =   environment.urlConecction;


  public headers;

  constructor(public http: HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  

  obtenerPeliculas() : Observable<any> {
    //console.log(this.http.get(this.URLConecction+'/peliculas', {headers : this.headers}));
    return this.http.get(this.URLConecction+'/peliculas', {headers : this.headers});
  }

  eliminarPelicula(id) : Observable<any> {

    return this.http.delete(this.URLConecction+'/peliculas/' + id, {headers: this.headers});
  }
}
