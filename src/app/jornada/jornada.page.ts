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
  
  numJornada=1;
  jornada= new Jornada(this.liga.$listaEquipos, this.numJornada, this.liga.$fechas[this.numJornada]);
  clasificacion = this.jornada.$clasiJornada.$listaClasiJornada;
 
  
  cronologia: Cronologia;
  
  
  resultado=this.jornada.$listaPartidos;
  
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
  visible = true;
  habilitado=true;
  segmentChanged(hola) {
    this.visible = !this.visible;
  }
  cambiarAnterior(numJornada){
    if (numJornada>0) {
      this.numJornada=numJornada;
      this.jornada= this.liga.$listaJornadas[this.numJornada];
      this.resultado=this.jornada.$listaPartidos;
      this.clasificacion = this.jornada.$clasiJornada.$listaClasiJornada;
    }
  }
  cambiarSiguiente(numJornada){
    if (numJornada<=this.liga.$maxJornadas) {
      this.numJornada=numJornada;
      this.jornada= this.liga.$listaJornadas[this.numJornada];
      this.resultado=this.jornada.$listaPartidos;
      this.clasificacion = this.jornada.$clasiJornada.$listaClasiJornada;
    }
  }
  jugarJornada(numJornada){
    if (this.liga.$listaJornadas.length+1<this.liga.$maxJornadas) {
      this.numJornada=numJornada;
      this.liga.guardarJornada(this.jornada);
      this.jornada=new Jornada(this.liga.$listaEquipos, this.numJornada, this.liga.$fechas[this.numJornada]);
      this.clasificacion = this.jornada.$clasiJornada.$listaClasiJornada;
      this.resultado=this.jornada.$listaPartidos;
    }else{
      // this.clasificacion=[];
      this.habilitado=false;
    }

  }
  ngOnInit() {
    
  }
}
