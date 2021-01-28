import { Component } from '@angular/core';
import { DataService } from '../core/model/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private datosService:DataService) {
    this.abrir(datosService);
  }
  
  ngOnInit(): void {
    
  }
  
  async abrir(datosService: DataService){
    await datosService.openDB();
  }
  getHoras(){
    this.datosService.getHoras();
  }
  
  getGrupos(){
    this.datosService.getGrupos();
  }
  getHorario(){
    this.datosService.getHorario();
  }
}
