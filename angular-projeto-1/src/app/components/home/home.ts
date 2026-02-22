import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // colocar as bibliotecas aqui
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  meuBooleano = "false";
  idButton = "";
  deveMostrarTitulo = false;
  listItens = [1, 2, 3];

  atualizaBooleano(valor: any){ //any da qualquer valor para a string
    this.meuBooleano = valor;
  }

  submit(event: any){
    console.log(event);
  }

  trocar(){
    if(this.deveMostrarTitulo == false){
      this.deveMostrarTitulo = true;
    }else{
      this.deveMostrarTitulo = false;
    }
  }
}
