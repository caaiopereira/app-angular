export class Esportes {
    id: number;
    nome: string;
    audiencia: string;
    origem: string;

    constructor(id: number, nome: string, audiencia: string, origem: string){
        this.id = id;
        this.nome = nome;
        this.audiencia = audiencia;
        this.origem = origem;
    }
}
