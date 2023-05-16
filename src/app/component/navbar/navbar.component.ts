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

  // returns user id as a number if it comes back undefined during a subscribe()
  idAsNumber(id : number | undefined) : number {
    return id as number;
  }

  // if user is logged in then it will hide the login button on the navbar and
  // display it if they aren't logged in
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

  // Retrieves all the users in the database and their logged in status is
  // false. The loginID goes back to 0 and local storage is cleared
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
