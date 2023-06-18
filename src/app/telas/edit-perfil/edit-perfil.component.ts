import { Component } from '@angular/core';
import { AccountService } from 'src/app/account/shared/account.service';
import { GeralService } from '../commom/geral.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent {
  user = {
    full_name: '',
    password: '',
    address: '',
  };
  
  constructor(
    private geralService: GeralService,
    private router: Router
  ) { }

  async onSubmit() {
    try {
      const result = await this.geralService.editAccount(this.user);

      alert("dados alterados com sucesso");
      this.router.navigate(['/perfil']);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

}
