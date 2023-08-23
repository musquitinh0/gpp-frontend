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
    {model: ''}
  ]

  phonesFound=[
    {model: ''}
  ]

  phone ={
    imei: ''
   }

   phone1 = {
    model: '',
    imei: '',
    number1: '',
    BOfeito: ''
  }

   modal = false;

  constructor(
    private geralService: GeralService,
    private router: Router
  ) { }

  logout(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.geralService.getLostPhones().subscribe(phones => {
      this.phones = phones;
    });

    this.geralService.getFoundPhones().subscribe(phones => {
      this.phonesFound = phones;
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

  ativaModal(phone:any){
    this.phone1 = phone;
    this.modal = true;
  }

  desativaModal(){
    if(this.modal)
      this.modal = false;
  }

  erro = {
    error: ''
  }
  async solicitaCorpoDeDelito(phone:any){
    try{
      const result = await this.geralService.corpoDeDelito(phone);
      this.modal = false;
      alert("corpo de delito solicitado com sucesso");
    } catch(error:any){
      const tipoError = await error.error;
      console.log(error);
      alert(tipoError);
    }
  }

}
