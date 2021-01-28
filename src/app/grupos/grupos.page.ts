import { Grupos } from '../core/model/grupos';
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
  grupo: Grupos;
  

  constructor(private route: Router,private rutaActivada: ActivatedRoute) {
    this.rutaActivada.queryParams.subscribe(()=>{
      this.grupo=this.route.getCurrentNavigation().extras.state.grupo;
    });
  }

  async pasaDato(event:Grupos) {
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
