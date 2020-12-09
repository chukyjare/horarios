import { Clasificacion } from './../core/model/clasificacion';
import { Cronologia } from './../core/model/cronologia';
import { Jornada } from './../core/model/jornada';
import { Liga } from './../core/model/liga';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Partido } from '../core/model/partido';


@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.page.html',
  styleUrls: ['./jornada.page.scss'],
})
export class JornadaPage implements OnInit {
  liga: Liga = new Liga();
  numJornada: number=0;
  letreroJornada:number=this.numJornada+1;
  jornada: Jornada= new Jornada(this.liga.$listaEquipos, this.numJornada, this.liga.$fechas[this.numJornada]);
  clasificacion = this.jornada.$clasiJornada.$listaClasiJornada;
  cronologia: Cronologia;
  resultado: Partido[]=this.jornada.$listaPartidos;
  
  constructor(private aler: AlertController, private route: Router) {}
  async pasaDato(event:Partido) {
    this.cronologia=new Cronologia(event);
    let extrasNavegacion: NavigationExtras = {
      state: {
        cronologia: this.cronologia,
      },
    };
    this.route.navigate(["cronologia"], extrasNavegacion);

  }
  visible: boolean = true;
  habilitado: boolean=true;
  habitlitadoNext: boolean=true;
  habitlitadoBack:boolean=true;
  segmentChanged(sudorYlagrimas) {
    this.visible = !this.visible;
  }
  cambiarAnterior(numJornada){
    if (numJornada>=0) {
      this.numJornada=numJornada;
      this.letreroJornada=this.numJornada+1;
      this.jornada= this.liga.$listaJornadas[this.numJornada];
      this.resultado=this.jornada.$listaPartidos;
      this.clasificacion = this.jornada.$clasiJornada.$listaClasiJornada;
    }
  }
  cambiarSiguiente(numJornada){
    if (numJornada<this.liga.$maxJornadas) {
      this.numJornada=numJornada;
      this.letreroJornada=this.numJornada+1;
      this.jornada= this.liga.$listaJornadas[this.numJornada];
      this.resultado=this.jornada.$listaPartidos;
      this.clasificacion = this.jornada.$clasiJornada.$listaClasiJornada;
    }
  }
  jugarJornada(numJornada){
    if (this.liga.$listaJornadas.length<this.liga.$maxJornadas) {
      this.numJornada=numJornada;
      this.letreroJornada=this.numJornada+1;
      this.liga.guardarJornada(this.jornada);
      this.jornada=new Jornada(this.liga.$listaEquipos, this.numJornada, this.liga.$fechas[this.numJornada]);
      this.clasificacion = this.jornada.$clasiJornada.$listaClasiJornada;
      this.resultado=this.jornada.$listaPartidos;
    }else{
      this.habilitado=false;
    }

  }
  ngOnInit() {
    
  }
}
