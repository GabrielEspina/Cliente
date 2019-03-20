import { Component, OnInit } from '@angular/core';
import { MockServerService } from '../services/mock-server.service';
import { Patient } from '../model/patient.model';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  errorMessage = "No se encuentran pacientes";

  constructor(private mock: MockServerService) {
    alert(this.mock.getPatients());
   }

  ngOnInit() {
  }



}
