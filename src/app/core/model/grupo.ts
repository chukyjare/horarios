import { Estudio } from './estudio';
export class Grupo{
    
    constructor(private id:number, private nombre: String){
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
    
   
}