import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  formularioDeReservas:FormGroup;

  constructor(
      public formulario:FormBuilder,
      private crudService:CrudService,
    ){ 
    this.formularioDeReservas=this.formulario.group({
      nombre:[''],
      servicio:[''],
      fecha:['']
    })
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log("Funciona");
    console.log(this.formularioDeReservas.value);
    this.crudService.AgregarReserva(this.formularioDeReservas.value).subscribe();
  }

}
