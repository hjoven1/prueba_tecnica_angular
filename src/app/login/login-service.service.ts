import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private URLConecction =   environment.urlConecctionLogeo;
  public headers;

  constructor(public http: HttpClient) { 
    this.headers = new HttpHeaders({
      'X-MC-SO' : 'WigilabsTest'
    });
  }
  
  login(data): Observable<any> {
    return this.http.post(this.URLConecction+'index.php/v1/soap/LoginUsuario.json', data, {headers: this.headers})
  }
}
