import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Horario } from '../core/model/horario';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
  //Aqui iria un objeto horario de la clase Horario
  // horario: Horario;
  horario= [
    { hora:"8:15", asignaturaL: "ING", asignaturaM: "CMC", asignaturaMX: "CMC", asignaturaJ: "CMC", asignaturaV: "MAT"},
    { hora:"9:10",asignaturaL: "LEN", asignaturaM: "CMC", asignaturaMX: "CMC", asignaturaJ: "CMC", asignaturaV: "MAT"},
    { hora:"10:05",asignaturaL: "FIL", asignaturaM: "CMC", asignaturaMX: "CMC", asignaturaJ: "CMC", asignaturaV: "MAT"},
    { hora:"RECREO",asignaturaL: "RECREO", asignaturaM: "RECREO", asignaturaMX: "RECREO", asignaturaJ: "RECREO", asignaturaV: "RECREO"},
    { hora:"11:25",asignaturaL: "MAT", asignaturaM: "CMC", asignaturaMX: "CMC", asignaturaJ: "CMC", asignaturaV: "MAT" },
    { hora:"12:15",asignaturaL: "EF", asignaturaM: "CMC", asignaturaMX: "CMC", asignaturaJ: "CMC", asignaturaV: "MAT" },
    { hora:"13:10",asignaturaL: "DCD", asignaturaM: "CMC", asignaturaMX: "CMC", asignaturaJ: "CMC", asignaturaV: "MAT"}
  ];
  constructor(public route:Router, private rutaActivada: ActivatedRoute) { 
    this.rutaActivada.queryParams.subscribe(()=>{
      this.horario=this.route.getCurrentNavigation().extras.state.horario;
    });
  }

  ngOnInit() {
  }

}
