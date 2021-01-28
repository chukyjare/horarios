import { Estudio } from './estudio';
export class Grupos{

    private id:number;
    private nombre: String;
    private listaGrupos: Array<Grupos>;
    
    constructor(estudio:any){
        //Aqui lanzo la consulta del estudio para poder guardarlo en nombre
    }
    /**
     * Getter $id
     * @return {number}
     */
    public get $id(): number {
        return this.id;
    }
    
    /**
     * Getter $nombre
     * @return {String}
     */
    public get $nombre(): String {
        return this.nombre;
    }
    
    /**
     * Getter $listaGrupos
     * @return {Array<Grupo>}
     */
    public get $listaGrupos(): Array<Grupos> {
        return this.listaGrupos;
    }

    /**
     * Setter $listaGrupos
     * @param {Array<Grupo>} value
     */
    public set $listaGrupos(value: Array<Grupos>) {
        this.listaGrupos = value;
    }
    /**
     * Setter $id
     * @param {number} value
     */
    public set $id(value: number) {
        this.id = value;
    }
    
    /**
     * Setter $nombre
     * @param {String} value
     */
    public set $nombre(value: String) {
        this.nombre = value;
    }
}