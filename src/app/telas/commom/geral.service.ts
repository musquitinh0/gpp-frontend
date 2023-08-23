import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile } from '../perfil/perfil';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor(private http: HttpClient) { }


  async editAccount(account: any) {
    const result = await this.http.put<any>(`${environment.api}/profile`, account).toPromise();
    return result;
  }

  async addPhone(phone: any) {
    const result = await this.http.post<any>(`${environment.api}/register/phone`, phone).toPromise();
    return result;
  }

  async phoneFound(phone: any) {
    const result = await this.http.post<any>(`${environment.api}/phone/found`, phone).toPromise();
    return result;
  }

  async phoneLost(phone: any) {
    const result = await this.http.post<any>(`${environment.api}/phone/lost`, phone).toPromise();
    return result;
  }

  async removePhone(phone: any) {
    const result = await this.http.post<any>(`${environment.api}/remove/phone`, phone).toPromise();
    return result;
  }

  async phoneBO(data: any) {
    const result = await this.http.post<any>(`${environment.api}/phone/report`, data).toPromise();
    return result;
  }

  async corpoDeDelito(data: any) {
    const result = await this.http.post<any>(`${environment.api}/phone/delicti`, data).toPromise();
    return result;
  }

  getPerfil(){
    return this.http.get<Profile>(`${environment.api}/profile`);
  }

  getLostPhones(){
    return this.http.get<any>(`${environment.api}/phone/losts`);
  }

  getFoundPhones(){
    return this.http.get<any>(`${environment.api}/phone/founds`);
  }

}
