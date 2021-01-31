// import { SQLiteObject } from '@ionic-native/sqlite/ngx';
// import { SQLite } from '@ionic-native/sqlite/ngx';

// export interface SQLiteDatabaseConfig {
//     /**
//      * Name of the database. Example: 'my.db'
//      */
//     name: string;
//     /**
//      * Location of the database. Example: 'default'
//      */
//     location?: string;
//     /**
//      * iOS Database Location. Example: 'Library'
//      */
//     iosDatabaseLocation?: string;
// }

// export class SQLiteObjectMock extends SQLiteObject {   
    
//     open(): Promise<any>{
//         let theResult: any=[];
//         return new Promise((resolve, reject) => {
//             resolve(theResult);
//         });
//     };
    
//     executeSql(statement: string, params: any): Promise<any>{

//         if(statement==="Select descripcion as nombre from horasSemana"){
//             let horasData: any= ["8:15", "9:10", "10:05", "11:25", "12:15", "13:10"];
//             return new Promise((resolve, reject) => {
//                 resolve(horasData);
//             });
//         }

//         if(statement==="select estudios.nombre from estudios where 1"){
//             let estudiosData: any= ["ESO","DIV","BAC","PCPI","GM","GS"];
//             return new Promise((resolve, reject) => {
//                 resolve(estudiosData);
//             });
//         }

//         if(statement==="select grupo.nombre from grupo,estudios where grupo.idEstudios == estudios.idEstudios and estudios.nombre like ?"){
//             let gruposData: any= ["e1a","e1b","e1c","e1d","e2a","e2b","e2c","e2d","3a","3b","3c","3d","4a","4b","4c"];
//             return new Promise((resolve, reject) => {
//                 resolve(gruposData);
//             });
//         }

//         if(statement==="select diaSemana.nombre, horasSemana.descripcion, materia.nombre from horasSemana, diaClase, materiahoraclase, horaClase, materia, diaSemana, grupo, estudios where  grupo.nombre like ? and diaSemana.idDiaSemana==diaClase.idDiaSemana and diaclase.idGrupo==grupo.idGrupo and horaclase.idDiaClase==diaclase.idDiaClase and horaclase.idHorasSemana==horassemana.idHorasSemana and materiahoraclase.idHoraClase==horaclase.idHoraClase and materiahoraclase.idMateria==materia.idMateria group by horaClase.idHorasSemana, horaClase.idDiaClase, horaClase.idHoraClase"){
//             let horarioData: any= [
//                 { nombreDia:"LUNES", descripcion: "8:15", nombreMat: "PMYDM"},
//                 { nombreDia:"LUNES", descripcion: "9:10", nombreMat: "PMYDM"},
//                 { nombreDia:"LUNES", descripcion: "10:05", nombreMat: "PMYDM"},
//                 { nombreDia:"LUNES", descripcion: "11:25", nombreMat: "PMYDM"},
//                 { nombreDia:"LUNES", descripcion: "12:15", nombreMat: "PMYDM"},
//                 { nombreDia:"LUNES", descripcion: "13:10", nombreMat: "PMYDM"},
//                 { nombreDia:"MARTES", descripcion: "8:15", nombreMat: "PMYDM"},
//                 { nombreDia:"MARTES", descripcion: "9:10", nombreMat: "PMYDM"},
//                 { nombreDia:"MARTES", descripcion: "10:05", nombreMat: "PMYDM"},
//                 { nombreDia:"MARTES", descripcion: "11:25", nombreMat: "PMYDM"},
//                 { nombreDia:"MARTES", descripcion: "12:15", nombreMat: "PMYDM"},
//                 { nombreDia:"MARTES", descripcion: "13:10", nombreMat: "PMYDM"},
//                 { nombreDia:"MIERCOLES", descripcion: "8:15", nombreMat: "PMYDM"},
//                 { nombreDia:"MIERCOLES", descripcion: "9:10", nombreMat: "PMYDM"},
//                 { nombreDia:"MIERCOLES", descripcion: "10:05", nombreMat: "PMYDM"},
//                 { nombreDia:"MIERCOLES", descripcion: "11:25", nombreMat: "PMYDM"},
//                 { nombreDia:"MIERCOLES", descripcion: "12:15", nombreMat: "PMYDM"},
//                 { nombreDia:"MIERCOLES", descripcion: "13:10", nombreMat: "PMYDM"},
//                 { nombreDia:"JUEVES", descripcion: "8:15", nombreMat: "PMYDM"},
//                 { nombreDia:"JUEVES", descripcion: "9:10", nombreMat: "PMYDM"},
//                 { nombreDia:"JUEVES", descripcion: "10:05", nombreMat: "PMYDM"},
//                 { nombreDia:"JUEVES", descripcion: "11:25", nombreMat: "PMYDM"},
//                 { nombreDia:"JUEVES", descripcion: "12:15", nombreMat: "PMYDM"},
//                 { nombreDia:"JUEVES", descripcion: "13:10", nombreMat: "PMYDM"},
//                 { nombreDia:"VIERNES", descripcion: "8:15", nombreMat: "PMYDM"},
//                 { nombreDia:"VIERNES", descripcion: "9:10", nombreMat: "PMYDM"},
//                 { nombreDia:"VIERNES", descripcion: "10:05", nombreMat: "PMYDM"},
//                 { nombreDia:"VIERNES", descripcion: "11:25", nombreMat: "PMYDM"},
//                 { nombreDia:"VIERNES", descripcion: "12:15", nombreMat: "PMYDM"},
//                 { nombreDia:"VIERNES", descripcion: "13:10", nombreMat: "PMYDM"}
//               ];
//             return new Promise((resolve, reject) => {
//                 resolve(horarioData);
//             });
//         }
//     };
    
// }

// export interface SQLiteTransaction {
//     start: () => void;
//     executeSql: (sql: any, values: any, success: Function, error: Function) => void;
//     addStatement: (sql: any, values: any, success: Function, error: Function) => void;
//     handleStatementSuccess: (handler: Function, response: any) => void;
//     handleStatementFailure: (handler: Function, response: any) => void;
//     run: () => void;
//     abort: (txFailure: any) => void;
//     finish: () => void;
//     abortFromQ: (sqlerror: any) => void;
// }

// export class SQLiteMock extends SQLite {
//     /**
//      * Open or create a SQLite database file.
//      *
//      * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
//      *
//      * @param config {SQLiteDatabaseConfig} database configuration
//      * @return Promise<SQLiteObject>
//      */
//     create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
//         let theResult: SQLiteObject= new SQLiteObject(config);
//         return new Promise((resolve, reject) => {
//             resolve(theResult);
//         });
//     };

// }