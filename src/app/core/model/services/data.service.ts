import { CopyService } from './copy.service';

import { Platform } from "@ionic/angular";
import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";

@Injectable({
  providedIn: "root",
})
export class DataService {
  protected db: SQLiteObject;
  protected horasList: any[] = [];

    /**
     * Getter $estudiosList
     * @return {any[] }
     */
	public get $estudiosList(): any[]  {
		return this.estudiosList;
	}
  protected estudiosList: any[] = [];
  protected gruposList: any[] = [];
  protected horarioList: any[] = [];
  /*
  Este servicio supone que se ha copiado la bbdd
  */
 /*
 *Platform nos dice si el la plataforma a usar esta lista, entre otras cosas.
 */
/*
Un objeto SQLite se encarga de gestionar la bbdd
*/
constructor(private platform: Platform, private sqlite: SQLite, copy: CopyService) {
  copy.copiarBBDD();
}

async executeSentence(target:any[],sqlSentence: string, searchParam: any[]) {
  let consultable = true;
  if (!this.db) {
    await this.openDB()
    .then(()=>{
      console.log(this.db);          
    })
    .catch(() => {
      consultable = false;
    });
  }
  if (consultable) {
    this.db
    .executeSql(sqlSentence, searchParam)
    .then((data) => {
      for(let i=0;i<data.rows.length;i++){
        let obj=data.rows.item(i);
        target.push(obj);
        console.log(obj);
      }
    })
    .catch((e) => {
      console.log("fallo al ejecutar sentencia "+JSON.stringify(e));
    });
  }
}

getHoras() {
  const sql = "Select descripcion as nombre from horasSemana";
  return this.createPromise(sql, this.horasList);
}
//Si no funciona convertir a promesa
getEstudios(){
  const sql = "select estudios.nombre from estudios where 1";
  return this.createPromise(sql, this.estudiosList);
}


getGrupos(){
  const sql ="select grupo.nombre from grupo,estudios where grupo.idEstudios == estudios.idEstudios and estudios.nombre like ?";
  return this.createPromise(sql, this.gruposList);
}

getHorario(){
  const sql="select diaSemana.nombre, horasSemana.descripcion, materia.nombre from horasSemana, diaClase, materiahoraclase, horaClase, materia, diaSemana, grupo, estudios where  grupo.nombre like ? and diaSemana.idDiaSemana==diaClase.idDiaSemana and diaclase.idGrupo==grupo.idGrupo and horaclase.idDiaClase==diaclase.idDiaClase and horaclase.idHorasSemana==horassemana.idHorasSemana and materiahoraclase.idHoraClase==horaclase.idHoraClase and materiahoraclase.idMateria==materia.idMateria group by horaClase.idHorasSemana, horaClase.idDiaClase, horaClase.idHoraClase";
  return this.createPromise(sql, this.horarioList);
}

async openDB() {
  await this.platform
  .ready()
  .then(async () => {
    //si la plataforma esta preparada voy a abrir la bbdd ya copiada
    await this.sqlite
    //si la bbdd no existe la crea y la abre y si existe la abre
    .create(this.getConector())
    .then((db: SQLiteObject) => {
      this.db = db;
    })
    .catch((err) => {
      console.log(err);
    });
  })
  .catch();
}

private getConector() {
  return {
    name: "Horario16e.db",
    location: "default",
    createFromLocation: 1,
  };
}
private createPromise(sql: string, arrayList: any[]) {
    return new Promise((resolve, reject) => {
      this.executeSentence(arrayList, sql, [])
        .then((response) => resolve(response))
        .catch((e) => reject(e));
    });
}

}
