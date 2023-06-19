import { Component } from '@angular/core';
import { GeralService } from '../commom/geral.service';
import { Profile } from './perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  
  user: Profile = new Profile();

  phones =[
    {model: ' '}
  ]

  phone1 = {
    model: '',
    imei: '',
    number1: ''
  }

  modal = false;

  constructor(
    private geralService: GeralService
  ) { }

  ativaModal(phone:any){
    this.phone1 = phone;
    this.modal = true;
  }

  ngOnInit() {
    this.geralService.getPerfil().subscribe(profile => {
      this.user = profile;
      this.phones = this.user.phones;
    });
  }

  async remove(phone:any){
    try {
      const result = await this.geralService.removePhone(phone);
      alert("telefone removido com sucesso");
      this.modal = false;
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  async marcaPerdido(phone:any){
    try {
      const result = await this.geralService.phoneLost(phone);
      alert("telefone marcado como perdido");
      this.modal = false;
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }
}
