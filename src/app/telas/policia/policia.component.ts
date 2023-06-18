import { Component } from '@angular/core';
import { GeralService } from '../commom/geral.service';

@Component({
  selector: 'app-policia',
  templateUrl: './policia.component.html',
  styleUrls: ['./policia.component.css']
})
export class PoliciaComponent {
  phone ={
   imei: ''
  }
  
  constructor(
    private geralService: GeralService
  ) { }

  async onSubmit() {
    try {
      const result = await this.geralService.phoneFound(this.phone);
      alert("dispositivo marcado como encontrado com sucesso");
      console.log(result);
    } catch (error) {
      alert("imei não encontrado na base de dados");
    }
  }

}
