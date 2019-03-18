import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTurnoComponent } from './buscar-turno.component';

describe('BuscarTurnoComponent', () => {
  let component: BuscarTurnoComponent;
  let fixture: ComponentFixture<BuscarTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
