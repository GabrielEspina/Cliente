import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-turno',
  templateUrl: './card-turno.component.html',
  styleUrls: ['./card-turno.component.css']
})

export class CardTurnoComponent implements OnInit {
  @Input() turno: {};

  constructor() { }

  ngOnInit() {
  }

}
