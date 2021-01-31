import { GruposService } from './../core/model/services/grupos/grupos.service';
import { DataService } from './../core/model/services/data.service';
import { EstudiosService } from './../core/model/services/estudios/estudios.service';
import { Estudio } from './../core/model/estudio';
import { Component, OnInit } from '@angular/core';
import { Grupo } from '../core/model/grupo';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.page.html',
  styleUrls: ['./estudios.page.scss'],
})
export class EstudiosPage implements OnInit{
  grupos: Grupo;
  estudiosList: any[]=[];
  estudios: Array<Estudio> = new Array<Estudio>();

  constructor(private route: Router, private data: DataService, private estudiosService:EstudiosService, private gruposService: GruposService) {
    this.getListaEstudios();
  }
  
  ngOnInit(): void {
    
  }

  getListaEstudios(){
    this.estudiosList=this.estudiosService.getEstudiosList();
    console.log("Esto es el horariosList ",this.estudiosList);
    this.rellenar();
  }

   rellenar(): Array<Estudio> {
    for (let i = 0; i < this.estudiosList.length; i++) {
      this.estudios.push(new Estudio(i+1, this.estudiosList[i].nombre));
    }
    console.log(this.estudios);
    return this.estudios;
  }
  
  async pasaDato(event:Estudio) {
//VEr porque me llega antes el enrutamiento que la propia carga de la base de datos

    this.gruposService.getGrupos(this.data,event.$nombre);
    new Promise((resolve: Function, reject: Function)=>{
      setTimeout(() => {
        let extrasNavegacion: NavigationExtras = {
          state: {
            grupos: this.grupos,
          },
        };
        this.route.navigate(["grupos"], extrasNavegacion);
      }, 500);
    })
    .then(()=>{})
    .catch((e)=>console.log(e))

    // this.gruposService.getGrupos(this.data,event.$nombre);
    // let extrasNavegacion: NavigationExtras = {
    //   state: {
    //     grupos: this.grupos,
    //   },
    // };
    // this.route.navigate(["grupos"], extrasNavegacion);
   

}
}
