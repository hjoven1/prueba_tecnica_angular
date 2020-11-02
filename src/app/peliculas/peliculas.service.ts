import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private URLConecction =   environment.urlConecction;


  public headers;

  constructor(public http: HttpClient) { 
    this.headers = new HttpHeaders();
  }

  obtenerDatos(id): Observable<any> {
    return this.http.get(this.URLConecction+'/peliculas/' + id, {headers: this.headers});
  }


  guardarData(data, id): Observable<any> {
    if (id != 0 && id != undefined && id != null) {
      return this.http.put(this.URLConecction+'/peliculas/editar-con-foto/' + id, data);
    } else {
      return this.http.post(this.URLConecction+'/peliculas/crear-con-foto', data);
    }
  }
}
