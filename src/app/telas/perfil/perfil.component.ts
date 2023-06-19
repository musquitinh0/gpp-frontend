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

  constructor(
    private geralService: GeralService
  ) { }

  ngOnInit() {
    this.geralService.getPerfil().subscribe(profile => {
      this.user = profile;
      this.phones = this.user.phones;
    });


  }

}
