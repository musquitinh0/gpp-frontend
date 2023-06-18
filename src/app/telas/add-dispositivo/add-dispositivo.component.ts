import { Component } from '@angular/core';
import { AccountService } from 'src/app/account/shared/account.service';
import { GeralService } from '../commom/geral.service';

@Component({
  selector: 'app-add-dispositivo',
  templateUrl: './add-dispositivo.component.html',
  styleUrls: ['./add-dispositivo.component.css']
})
export class AddDispositivoComponent {
  phone = {
    modelo: '',
    number1: '',
    number2: '1241241',
    imei: ''
  }
  constructor(
    private geralService: GeralService
  ) { }

  async onSubmit() {
    try {
      const result = await this.geralService.addPhone(this.phone);

      alert("Telefone cadastrado com sucesso");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
