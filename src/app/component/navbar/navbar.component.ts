import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  hideLoginButton = false;

  constructor(private authService:AuthService){}

  idAsNumber(id : number | undefined) : number {
    return id as number;
  }

  ifLoggedIn():boolean{
    if(this.authService.isLoggedIn){
      this.authService.isLoggedIn = true;
      this.hideLoginButton = true;
      return this.authService.isLoggedIn;
    }
    else{
      this.hideLoginButton = false;
      return this.authService.isLoggedIn;
    }
  }

  logout():void{

    this.authService.getRegisteredUsers().subscribe(data => {
      for(let i = 0; i < data.length; i++){
        this.authService.logoutUser(this.idAsNumber(data[i].id)).subscribe(json => {
          this.authService.isLoggedIn = false;
          this.authService.loginID = 0;
          localStorage.setItem("login","");
          localStorage.setItem("id","");
        })
      }
    })
  }


}
