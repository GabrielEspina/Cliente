import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './Post';
import { identifierModuleUrl } from '@angular/compiler';

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

  sideBar = false;
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

  manageSideBar(){
    if(this.sideBar)
      this.sideBar = this.closeNav();
    else
      this.sideBar = this.openNav();
  }

   openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    return true;
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
   closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    return false;
  }
}
