import { MaterailLeitura } from "./MaterialLeitura";

class revistas implements MaterailLeitura{
    titulo: string;
    autor: string;
    edicao:number;
    exibirDetalhe(): void {
        console.log(`nome: ${this.titulo} autora: ${this.autor} edicao ${this.edicao}`);
    }

    constructor (titulo: string, autor: string, edicao:number) {
        this.titulo=titulo;
        this.autor = autor;
        this.edicao = edicao;
    }

}

const teste  = new revistas(`Times`, `Henry Luce e Briton Hadden`, 2025);
teste.exibirDetalhe();
