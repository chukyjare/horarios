import { EstudiosService } from './services/estudios/estudios.service';
export class Estudio{

    constructor(private id: number, private nombre: String){
        this.id=id;
        this.nombre=nombre;
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