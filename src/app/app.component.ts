import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['pepe','marta','gilaaso'];
  title = 'cliente';
  posts = [];

  boton = {
    inicio : "active",
    acerca : "",
    turnos : "",
    buscar : "",
  }

  activado = "";
  activar(boton){
    this.boton[this.activado] = "";
    this.boton[boton] = "active";
    this.activado = boton;
  }

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data =>{
      console.log(data);
      this.posts = data;
    });
  }
}
