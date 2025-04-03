import { MaterailLeitura } from "./MaterialLeitura";
 
class Artigo implements MaterailLeitura{
    titulo: string;
    autor: string;
    dataPublicacao: Date;
    exibirDetalhe(): void {
        console.log(`nome: ${this.titulo} autora: ${this.autor} data ${this.dataPublicacao}`);    }

    constructor (titulo: string, autor: string, dataPublicacao: Date) {
        this.titulo=titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

}
const teste  = new Artigo(`Relativitatstheorie`, `A. Eisten`, new Date ("06/061923"));
teste.exibirDetalhe();
