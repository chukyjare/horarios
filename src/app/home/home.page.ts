import { Component } from '@angular/core';
import { DataService } from '../core/model/services/data.service';
import { EstudiosService } from '../core/model/services/estudios/estudios.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private datosService:DataService, private estudiosService:EstudiosService) {
    this.abrir(datosService);
    this.getListaService();
  }
  
  ngOnInit(): void {
    
  }
  
  async abrir(datosService: DataService){
    await datosService.openDB();
  }

  async getListaService(){
    await this.estudiosService.getEstudios(this.datosService);
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
