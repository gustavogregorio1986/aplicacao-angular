import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     public exibirCoteudo = false;

     public toggleConteudo(){
        this.exibirCoteudo = !this.exibirCoteudo;
     }

     public livros = [
      'Como morrem os pobres e outros ensaios',
      'A revolução dos bichos',
      '1988'
   ];
}
