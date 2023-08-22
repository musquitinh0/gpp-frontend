import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

//todo: cpf bonitinho
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
  passwordConfirm = '';

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    //todo: funções para avaliar de verdade
    if(this.user.address.length < 5){
      alert("Endereço inválido");
    }else if(this.user.cpf.length != 11){
      alert("cpf inválido");
    }else if(this.user.email.length < 5){
      alert("email invalido");
    }else if(this.user.password.length < 8){
      alert("senha muito curta!");
    }else if(this.user.password != this.passwordConfirm){
      alert("as senhas não coincidem!");
    }else{
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
  }

  async confirma(){
    try{
        const result = await this.accountService.confirmAccount(this.user);
        alert('Conta criada com sucesso!');
        console.log(result);
        this.router.navigate(['/perfil']);
    }catch(error){
      console.log(error);
    }
  }
}
