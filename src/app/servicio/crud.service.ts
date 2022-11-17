import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleados } from './Empleados';
import { Vendedor } from './Vendedores';
import { Reserva } from './Reserva';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:string='http://localhost/Centro/'; //api de php

  constructor(private clientHttp:HttpClient) { }

  AgregarEmpleado(datosEmpleado:Empleados):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar=1",datosEmpleado);
  }

  AgregarVendedor(datosVendedor:Vendedor):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar1=1",datosVendedor);
  }

  AgregarReserva(datosReserva:Reserva):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar2=1",datosReserva);
  }

  ObtenerEmpleados(){
    return this.clientHttp.get(this.API);
  }
  BorrarEmpleado(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar="+id);
  }
  ObtenerEmpleado(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar="+id);
  }
  EditarEmpleado(id:any ,datosEmpleado:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar="+id,datosEmpleado);
  }
}
