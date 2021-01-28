import { Estudio } from './../../estudio';
import { DataService } from './../data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  private horasList: any[]=[];
  
  constructor(data: DataService) { 
  }

  async getEstudios(data: DataService){
    const sql = "select estudios.nombre from estudios where 1";
    await data.executeSentence(this.horasList,sql,[]);
  }

  getHorasList(){
    return this.horasList;
  }

}
