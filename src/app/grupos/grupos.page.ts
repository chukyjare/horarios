import { GruposService } from './../core/model/services/grupos/grupos.service';
import { Grupo } from '../core/model/grupo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Horario } from '../core/model/horario';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {
  horario: Horario;
  grupos: Array<Grupo>;
  gruposList: any[]=[];
  

  constructor(private route: Router,private rutaActivada: ActivatedRoute, private gruposService: GruposService) {
    this.grupos=new Array<Grupo>();

  //Ver porque me da error aunque siga funcionando
    new Promise((resolve: Function, reject: Function)=>{
      resolve(this.getListaGrupos())
    })
    .then(()=> this.rutaActivada.queryParams.subscribe(()=>{
      this.grupos=this.route.getCurrentNavigation().extras.state.grupos;
    }))
    .catch((e)=>console.log(e))

    // this.rutaActivada.queryParams.subscribe(()=>{
    //   this.grupos=this.route.getCurrentNavigation().extras.state.grupos;
    // });
    // this.getListaGrupos();
  }

  getListaGrupos(){
    this.gruposList=this.gruposService.getGruposList();
    this.rellenar();
  }

  rellenar(){
    for (let i = 0; i < this.gruposList.length; i++) {
      this.grupos.push(new Grupo(i+1, this.gruposList[i].nombre));
    }
    console.log(this.grupos);
  }

  async pasaDato(event:Grupo) {
    //crear la clase horario en la que necesito como evento un grupo
    this.horario=new Horario(event);
    let extrasNavegacion: NavigationExtras = {
      state: {
        horario: this.horario,
      },
    };
    this.route.navigate(["horario"], extrasNavegacion);

  }

  ngOnInit() {
  }

}
