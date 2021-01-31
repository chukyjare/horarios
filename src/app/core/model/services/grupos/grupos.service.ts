import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class GruposService {
  private gruposList: any[]=[];
  
  constructor(data: DataService) { 
  }

  async getGrupos(data: DataService, estudio: any){
    const sql = "select grupo.nombre from grupo,estudios where grupo.idEstudios == estudios.idEstudios and estudios.nombre like ?";
    await data.executeSentence(this.gruposList,sql,[estudio]);
  }

  getGruposList(){
    return this.gruposList;
  }
}
