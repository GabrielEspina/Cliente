import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class TurnosComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
  
  ngOnInit() {
  }

  response = {
    "appointments": [
        {
            "id": 753,
            "clinic_id": 123,
            "clinic_name": "Clinica de la trinidad",
            "speciality_id": 789,
            "speciality_name": "Guardia de ginecologia",
            "hcp_id": 8560,
            "hcp_first_name": "Juan Jose",
            "hcp_last_name": "Ingenieros",
            "appointment_date": "2018/01/02 12:57",
            "appointment_status_id": 1,
            "appointment_status_name": "Pending"
        },
        {
            "id": 8820,
            "clinic_id": 123,
            "clinic_name": "Clinica de la trinidad",
            "speciality_id": 124,
            "speciality_name": "Traumatologo",
            "hcp_id": 9988,
            "hcp_first_name": "Bernabe",
            "hcp_last_name": "Marquez",
            "appointment_date": "2018/04/01 16:90",
            "appointment_status_id": 1,
            "appointment_status_name": "Pending"
        },
        {
            "id": 8820,
            "clinic_id": 123,
            "clinic_name": "Clinica de la trinidad",
            "speciality_id": 124,
            "speciality_name": "Traumatologo",
            "hcp_id": 9988,
            "hcp_first_name": "Bernabe",
            "hcp_last_name": "Marquez",
            "appointment_date": "2018/04/01 16:90",
            "appointment_status_id": 1,
            "appointment_status_name": "Pending"
        },
        {
            "id": 8820,
            "clinic_id": 123,
            "clinic_name": "Clinica de la trinidad",
            "speciality_id": 124,
            "speciality_name": "Traumatologo",
            "hcp_id": 9988,
            "hcp_first_name": "Bernabe",
            "hcp_last_name": "Marquez",
            "appointment_date": "2018/04/01 16:90",
            "appointment_status_id": 1,
            "appointment_status_name": "Pending"
        },
        {
            "id": 8820,
            "clinic_id": 123,
            "clinic_name": "Clinica de la trinidad",
            "speciality_id": 124,
            "speciality_name": "Traumatologo",
            "hcp_id": 9988,
            "hcp_first_name": "Bernabe",
            "hcp_last_name": "Marquez",
            "appointment_date": "2018/04/01 16:90",
            "appointment_status_id": 1,
            "appointment_status_name": "Pending"
        }
    ]
  }

  turnos = this.response.appointments;

}
