import { MaterailLeitura } from "./MaterialLeitura";

class Livro implements MaterailLeitura{
    titulo: string;
    autor: string;
    numeroDePagina: Number;
    exibirDetalhe(): void {
        console.log(`nome: ${this.titulo} autora: ${this.autor} numero de paginas ${this.numeroDePagina}`);
    }

    constructor (titulo: string, autor: string, numeroDePagina: Number,) {
        this.titulo=titulo;
        this.autor = autor;
        this.numeroDePagina = numeroDePagina;
    }


}

const teste  = new Livro(`anne de green gables`, `L. M. Montgomery`, 200);
teste.exibirDetalhe();