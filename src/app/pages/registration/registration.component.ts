import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/accounts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  username: string = "";
  password: string = "";

  constructor(private accountService: AccountService, private router: Router){}

  registerSubmit():void{

    let newUser: Account = {username:this.username, password:this.password}
    console.log(newUser);
    this.accountService.registerSubmit(newUser).subscribe()
  }

}
