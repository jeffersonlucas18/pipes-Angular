import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html'
})
export class ExemplosPipesComponent implements OnInit {

  constructor() { }

  livro: any = {
    titulo: 'Learning JavaScript Data  Structures and Algorithms Scond Edit',
    rating: 4.54321,
    numerosdepagina: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http: //a.co/glqjpRp'
  };

  listasLivro: string[] = ['Angular', 'Java', 'Php']

  AddCurso(novovalor: string) {
    this.listasLivro.push(novovalor);
    console.log(novovalor);
  }
  obterCursos() {
    if (this.listasLivro.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.listasLivro;
    }
    return this.listasLivro.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ) {
        return true;
      }
      return false;
    });
  }
  filtro: string;

  ngOnInit() {
  }

}
