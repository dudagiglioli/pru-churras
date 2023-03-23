import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo = 1;
  pontosTime1 = 0;
  pontosTime2 = 0;
  time1Ganhando = 0;
  time2Ganhando = 0;

  constructor() {}

  btn3(){
    this.valendo = 3;
  }

  btn6(){
    this.valendo = 6;
  }

  btn9(){
    this.valendo = 9;
  }

  btn12(){
    this.valendo = 12;
  }

  //pontuação time1
aumentarPonto1(){
  this.pontosTime1 = this.pontosTime1 + this.valendo
  if(this.pontosTime1 >= 12){
    this.pontosTime1 = 0;
    this.time1Ganhando = this.time1Ganhando + 1;
  }
}

diminuirPonto1(){
  this.pontosTime1 = this.pontosTime1 - this.valendo
  if(this.pontosTime1 < 0){
    this.pontosTime1 = 0;
  }
}

//pontuação time2
aumentarPonto2(){
  this.pontosTime2 = this.pontosTime2 + this.valendo
  if(this.pontosTime2 >= 12){
    this.pontosTime2 = 0;
    this.time2Ganhando = this.time2Ganhando + 1;
  }
}

diminuirPonto2(){
  this.pontosTime2 = this.pontosTime2 - this.valendo
  if(this.pontosTime2 < 0){
    this.pontosTime2 = 0;
  }
}

//limpar
limpar(){
  this.time1Ganhando = 0;
  this.time2Ganhando = 0;
}
}


