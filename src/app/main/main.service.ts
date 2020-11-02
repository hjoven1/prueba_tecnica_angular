import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private URLConecction =   environment.urlConecction;
  public headers;

  

  constructor(public http: HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
  
  obtenerDatosSlide(): Observable<any> {
    
    return this.http.get(this.URLConecction + '/peliculas', {headers: this.headers});
  }

  obtenerPeliculas() : Observable<any> {
    return this.http.get(this.URLConecction+'/peliculas', {headers : this.headers});
  }

  actualizarCalificacion(data): Observable<any> {
    return this.http.post(this.URLConecction+'/calificaciones', JSON.stringify(data), {headers: this.headers});
  }
}
