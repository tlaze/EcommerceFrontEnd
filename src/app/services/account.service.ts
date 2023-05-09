import { Injectable } from '@angular/core';
import { Account } from 'src/app/models/accounts';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  registerSubmit(account:Account){
      let header: HttpHeaders = new HttpHeaders();
      header.append("accept", "text/json");
      header.append("Access-Control-Allow-Origin", "*");
      return this.http.post<Account>("http://localhost:8080/signup", account, { headers: header });
  }

}
