import { Grupo } from "./grupo";
import { Hora } from "./hora";
import { Materia } from "./materia";

export class Horario{

    private hora: Hora;
    private materias: Array<Materia>;
    private horarios: Map<Hora,Array<Materia>>;
    
    constructor(grupo:Grupo){
        //Aqui iria la llamada a la base de datos y guardo los horarios en el mapa
    }
    /**
     * Getter $hora
     * @return {Hora}
     */
    public get $hora(): Hora {
        return this.hora;
    }
    
    /**
     * Getter $horarios
     * @return {Map<Hora,Array<Materia>>}
     */
    public get $horarios(): Map<Hora,Array<Materia>> {
        return this.horarios;
    }
    /**
     * Getter $materias
     * @return {Array<Materia>}
     */
    public get $materias(): Array<Materia> {
        return this.materias;
    }
    
    /**
     * Setter $hora
     * @param {Hora} value
     */
    public set $hora(value: Hora) {
        this.hora = value;
    }
    
    /**
     * Setter $horarios
     * @param {Map<Hora,Array<Materia>>} value
     */
    public set $horarios(value: Map<Hora,Array<Materia>>) {
        this.horarios = value;
    }
    
    
    /**
     * Setter $materias
     * @param {Array<Materia>} value
     */
    public set $materias(value: Array<Materia>) {
        this.materias = value;
    }
}