import { Component } from '@angular/core';
import { ZipOperator } from 'rxjs/internal/observable/zip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

textoBotao = "Esconder";
esconder = false;

pessoas = [
  { nome: "José", idade: 18, cidade:"São Paulo" ,estado: "SP"},
  { nome: "Maria", idade: 22, cidade:"Natal" ,estado: "RN"},
  { nome: "Elcio", idade: 51 , cidade:"Rio de Janeiro" ,estado: "RJ"},
  { nome: "Mario", idade: 35 , cidade:"Goiania" ,estado: "GO"},
  { nome: "Nelson", idade: 12 , cidade:"São Paulo" ,estado: "SP"},
  ];


alterarExibicao() {
this.textoBotao = this.esconder ? "Esconder" : "Exibir";
this.esconder = !this.esconder;
};

pegarCor(idade: number){
  return idade >= 30 ? "red": "blue";
};

}


