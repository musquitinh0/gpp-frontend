import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: '',
    confirmation_code: ''

  };

  modal = false;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
      try {
        const result = await this.accountService.login(this.login);
        console.log(`Login efetuado: ${result}`);

        // navego para a rota vazia novamente
        console.log(result);
        this.router.navigate(['/perfil']);
      } catch (error:any) {
        const tipoError = await error.error;
        
        if(tipoError == 'user not confirmed'){
          this.modal = true;
        }else{
          alert(tipoError);
        }
        
        console.error(error);
      }
    
  }

  async confirma(){
    try{
        const result = await this.accountService.confirmAccount(this.login);
        alert('Conta confirmada com sucesso!');
        console.log(result);
        this.router.navigate(['/perfil']);
    }catch(error){
      console.log(error);
    }
  }
}
