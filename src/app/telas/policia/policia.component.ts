import { Component } from '@angular/core';
import { GeralService } from '../commom/geral.service';
import { Profile } from '../perfil/perfil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policia',
  templateUrl: './policia.component.html',
  styleUrls: ['./policia.component.css']
})
export class PoliciaComponent {

  phones =[
    {model: 'Galaxy Z flip3'},
    {model: 'Iphone 14 pro max'}
  ]

  phone ={
    imei: ''
   }

  constructor(
    private geralService: GeralService,
    private router: Router
  ) { }

  logout(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.geralService.getLostPhones().subscribe(phones => {
      //this.phones = phones;
    });
  }

  async onSubmit() {
    try {
      const result = await this.geralService.phoneFound(this.phone);
      alert("dispositivo marcado como encontrado com sucesso, um email foi enviado ao usuario");
      console.log(result);
    } catch (error) {
      alert("imei não encontrado na base de dados");
    }
  }

}
