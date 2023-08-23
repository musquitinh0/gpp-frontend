import { Component } from '@angular/core';
import { GeralService } from '../commom/geral.service';
import { Profile } from './perfil';
import { Router } from '@angular/router';

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

  lostPhones = [
    {model: ' '}
  ]

  phone1 = {
    model: '',
    imei: '',
    number1: '',
    BOfeito: ''
  }

  modal = false;
  modalBO = false;

  constructor(
    private geralService: GeralService,
    private router: Router
  ) { }

  logout(){
    this.router.navigate(['/login']);
  }

  ativaModal(phone:any){
    this.phone1 = phone;
    this.modal = true;
  }

  ativaModalBO(phone:any){
    this.phone1 = phone;
    this.modalBO = true;
  }

  desativaModal(){
    if(this.modal)
      this.modal = false;
      if(this.modalBO)
      this.modalBO = false;
  }

  ngOnInit() {
    this.geralService.getPerfil().subscribe(profile => {
      if(profile.isPolicia){
        this.router.navigate(['/policia']);
      }else{
        this.user = profile;
        this.phones = this.user.phones;
        this.lostPhones = this.user.lostPhones;
      }
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
      alert(error);
    }
  }

  idBO = ''
  data = {
    imei: '',
    idBO: ''
  }

  async fazBO(phone:any){
    try{
      this.data.imei = this.phone1.imei;
      this.data.idBO = this.idBO;
      const result = await this.geralService.phoneBO(this.data);
      this.modalBO = false;
      alert("boletim de ocorrencia registrado com sucesso")
    } catch(error){
      console.log(error);
      alert(error);
    }
  }

  async marcaPerdido(phone:any){
    try {
      const result = await this.geralService.phoneLost(phone);
      alert("telefone marcado como perdido");
      this.modal = false;
      location.reload();
      this.modalBO = true;
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
}
