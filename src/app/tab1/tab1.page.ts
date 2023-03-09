import { animate, state, style, transition, trigger, } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterState } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotateY(0)' })),
      state('rotated', style({ transform: 'rotateY(-360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ])
  ]
})
export class Tab1Page {

  //declaração de variável
  cara = 'assets/cara.png';
  coroa = 'assets/coroa.png';
  logo = 'assets/logo.png';
  image = this.logo; //o mesmo conteúdo q tem no image tem na logo
  info = 'Clique no botão para jogar!';
  state = 'default'

  constructor() { }

  //função
  jogarMoeda() {
    this.info = 'Girando';
    this.image = this.logo;
    this.state = this.state === 'default' ? 'rotated' : 'default';

    //função anonima -()- , so funciona dentro de outra funcao // setTimeout é o "Delay"
    setTimeout(() => {
      if (Math.random() < 0.5) {
        this.image = this.cara;
        this.info = "Cara!";
      }
      else {
        this.image = this.coroa;
        this.info = "Coroa!";
      }
    }, 2000)

  }

}
