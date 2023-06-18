import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  user = {
    full_name: '',
    email: '',
    password: '',
    address: '',
    date_of_birth: '',
    cpf: '',
    confirmation_code: ''
  };
  modal = false;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.user);
      this.modal=true;
      window.scrollTo(0, 0);

      console.log(result);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  async confirma(){
    try{
        const result = await this.accountService.confirmAccount(this.user);
        alert('Conta criada com sucesso!');
        console.log(result);
    }catch(error){
      console.log(error);
    }
  }
}
