import { Component } from '@angular/core';
import { AccountService } from 'src/app/account/shared/account.service';
import { GeralService } from '../commom/geral.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dispositivo',
  templateUrl: './add-dispositivo.component.html',
  styleUrls: ['./add-dispositivo.component.css']
})
export class AddDispositivoComponent {
  phone = {
    model: '',
    number1: '',
    number2: '',
    imei: ''
  }
  constructor(
    private geralService: GeralService,
    private router: Router
    
  ) { }

  async onSubmit() {
    try {
      this.phone.number2 = this.phone.number1;
      const result = await this.geralService.addPhone(this.phone);
      
      alert("Telefone cadastrado com sucesso");
      this.router.navigate(['/perfil']);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
