export class EquipoInfo{
    
    
    constructor(private nombre:string,private posicionInfo: String, private puntosInfo:String,private GFInfo: String,private GCInfo: String){
        this.nombre=nombre;
        this.posicionInfo=posicionInfo;
        this.puntosInfo=puntosInfo;
        this.GFInfo=GFInfo;
        this.GCInfo=GCInfo;
    }
    /**
     * Getter $nombre
     * @return {string}
     */
    public get $nombre(): string {
        return this.nombre;
    }
    /**
     * Getter $posicionInfo
     * @return {String}
     */
    public get $posicionInfo(): String {
        return this.posicionInfo;
    }

    /**
     * Getter $puntosInfo
     * @return {String}
     */
    public get $puntosInfo(): String {
        return this.puntosInfo;
    }

    /**
     * Getter $GFInfo
     * @return {String}
     */
    public get $GFInfo(): String {
        return this.GFInfo;
    }

    /**
     * Getter $GCInfo
     * @return {String}
     */
    public get $GCInfo(): String {
        return this.GCInfo;
    }

    /**
     * Setter $posicionInfo
     * @param {String} value
     */
    public set $posicionInfo(value: String) {
        this.posicionInfo = value;
    }

    /**
     * Setter $puntosInfo
     * @param {String} value
     */
    public set $puntosInfo(value: String) {
        this.puntosInfo = value;
    }

    /**
     * Setter $GFInfo
     * @param {String} value
     */
    public set $GFInfo(value: String) {
        this.GFInfo = value;
    }

    /**
     * Setter $GCInfo
     * @param {String} value
     */
    public set $GCInfo(value: String) {
        this.GCInfo = value;
    }
    
}