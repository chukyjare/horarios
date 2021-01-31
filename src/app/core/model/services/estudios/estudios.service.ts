import { DataService } from './../data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  private estudiosList: any[]=[];
  
  constructor(data: DataService) { 
  }

  async getEstudios(data: DataService){
    const sql = "select estudios.nombre from estudios where 1";
    // await data.executeSentence(this.estudiosList,sql,[]);
    await data.createPromise(sql,this.estudiosList);
  }

  getEstudiosList(){
    return this.estudiosList;
  }

}
