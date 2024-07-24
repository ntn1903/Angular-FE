import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = "Account";
  constructor(private http: HttpClient) { }

  login(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.url}/login/`, user);
  }
}
