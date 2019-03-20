import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})

export class HolaMundoComponent implements OnInit {
  otrovalor =null;
  meter(valor){
    this.otrovalor = valor;
  }
  constructor() { }
  ngOnInit() {
  }

}
