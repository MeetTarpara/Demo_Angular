import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5210/api/Auth';

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/login', data);
  }

  register(data: any) {
    return this.http.post(this.apiUrl+'/register', data);
  }

  getPersons() {
    return this.http.get<any[]>(this.apiUrl+'/persons');
  }
  
 
}
