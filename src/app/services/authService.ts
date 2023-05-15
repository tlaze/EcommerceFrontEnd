import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from 'src/app/models/accounts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean = false;
  loginID:number = 0;

  constructor(private http: HttpClient) {
    this.isLoggedIn = localStorage.getItem('login') as unknown as boolean
    this.loginID = localStorage.getItem('login') as unknown as number
   }

  getRegisteredUsers(): Observable<Account[]>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Account[]>("http://localhost:8080", {headers:header});
}
  registerSubmit(account:Account){
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Account>("http://localhost:8080/registration", account, { headers: header });
  }

  loginSubmit(id:number){
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.patch<Account>(`http://localhost:8080/registration/${id}`, {isLoggedIn: true}, {headers:header});
  }

  logoutUser(id:number){
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.patch<Account>(`http://localhost:8080/registration/${id}`, {isLoggedIn: false}, {headers:header});
  }
}
