import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginInfo } from '../models/account/login-info.model';
import { RegisterInfo } from '../models/account/register-info.model';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {
  private url = "Account";
  constructor(private http: HttpClient) { }

  login(user: LoginInfo): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.url}/login/`, user);
  }

  register(info: RegisterInfo): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.url}/createUser/`, info);
  }
}
