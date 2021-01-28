import { DataService } from './../core/model/services/data.service';
import { EstudiosService } from './../core/model/services/estudios/estudios.service';
import { Estudio } from './../core/model/estudio';
import { Component, OnInit } from '@angular/core';
import { Grupos } from '../core/model/grupos';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.page.html',
  styleUrls: ['./estudios.page.scss'],
})
export class EstudiosPage implements OnInit{
  grupos: Grupos;
  horasList: any[]=[];
  private estudios: Array<Estudio> = new Array<Estudio>();

  constructor(private route: Router, private data: DataService, private estudiosService:EstudiosService) {
    this.getListaService();
  }
  
  ngOnInit(): void {
    
  }

  getListaService(){
    this.estudiosService.getEstudios(this.data);
    this.getListaEstudios();
    this.rellenar();
  }

  getListaEstudios(){
    this.horasList=this.estudiosService.getHorasList();
    console.log("Esto es el horariosList ",this.horasList);
  }

   rellenar(): Array<Estudio> {
    for (let i = 0; i < this.horasList.length; i++) {
      this.estudios.push(new Estudio(i+1, this.horasList[i].nombre));
    }
    console.log(this.estudios);
    return this.estudios;
  }
  
  async pasaDato(event:any) {
    this.grupos=new Grupos(event);
    let extrasNavegacion: NavigationExtras = {
      state: {
        grupos: this.grupos,
      },
    };
    this.route.navigate(["grupos"], extrasNavegacion);

}
}
