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

  constructor(private router: Router, private authService: AuthService){}

    ngOnInit():void {
      this.authService.getRegisteredUsers().subscribe();
    }

    idAsNumber(id : number | undefined) : number {
      return id as number;
    }

  registerSubmit():void{

    let newUser: Account = {username:this.username, password:this.password, balance:0, isLoggedIn:false}
    this.authService.registerSubmit(newUser).subscribe()

    this.authService.getRegisteredUsers().subscribe(data => {
//       console.log(data);
      let duplicate = false;
      data.forEach((users) => {
        if(this.username == users.username){
          console.log("duplicate");
        }
      })
    })
  }

  loginSubmit():void{

    this.authService.getRegisteredUsers().subscribe(users => {
      for(let i = 0; i < users.length; i++){
        console.log(users[i]);
        if(this.username == users[i].username && this.password == users[i].password){
          console.log("account exists");
          this.authService.loginSubmit(this.idAsNumber(users[i].id)).subscribe(data => {
            console.log(data);
          })
//           localStorage.setItem("login", this.idAsNumber(users[i].id) as unknown as string);
//           localStorage.setItem("id", this.idAsNumber(users[i].id).toString());
//           this.authService.isLoggedIn = true;
//           this.authService.loginID = this.idAsNumber(users[i].id);
//           this.authService.loginSubmit(this.idAsNumber(users[i].id)).subscribe(data => {
//             console.log(data);
//           })
        }
        else{
          console.log("doesn't exist");
        }

      }
    })
  }

}
