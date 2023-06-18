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
    password: ''
  };

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    if(this.login.email != "policia@delegacia.com"){
      try {
        const result = await this.accountService.login(this.login);
        console.log(`Login efetuado: ${result}`);

        // navego para a rota vazia novamente
        this.router.navigate(['/perfil']);
      } catch (error) {
        alert('Email ou senha incorretos');
        console.error(error);
      }
    }else{
      this.router.navigate(['/policia']);
    }
  }
}
