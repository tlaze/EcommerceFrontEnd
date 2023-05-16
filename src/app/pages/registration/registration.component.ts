import { Component, Input } from '@angular/core';
import { Account } from 'src/app/models/accounts';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  @Input()
  username: string = "";
  password: string = "";

  invalidCredentials:boolean = false;
  duplicateAccount:boolean = false;
  accountCreated:boolean = false;

  constructor(private router: Router, private authService: AuthService){}

    idAsNumber(id : number | undefined) : number {
      return id as number;
    }

  registerSubmit():void{

    let newUser: Account = {username:this.username, password:this.password, balance:0, isLoggedIn:false, cart:[]}
    this.authService.getRegisteredUsers().subscribe(data => {
      this.duplicateAccount = false;
      data.forEach((users) => {
        if(this.username == users.username){
          this.duplicateAccount = true;
          this.accountCreated = false;
        }
      })

      if(!this.duplicateAccount){
        this.duplicateAccount = false;
        this.accountCreated = true;
        this.authService.registerSubmit(newUser).subscribe();
      }
    })
  }

  loginSubmit():void{

    this.authService.getRegisteredUsers().subscribe(users => {
      for(let i = 0; i < users.length; i++){
        if(this.username == users[i].username && this.password == users[i].password){
          this.authService.loginSubmit(this.idAsNumber(users[i].id)).subscribe(data => {
          })
          this.invalidCredentials = false;
          localStorage.setItem("login", this.idAsNumber(users[i].id) as unknown as string);
          localStorage.setItem("id", this.idAsNumber(users[i].id).toString());
          this.authService.isLoggedIn = true;
          this.authService.loginID = this.idAsNumber(users[i].id);
          this.authService.loginSubmit(this.idAsNumber(users[i].id)).subscribe(data => {
            this.router.navigateByUrl('home');
          })
        }
        else{
          this.invalidCredentials = true;
        }
      }
    })
  }
}
