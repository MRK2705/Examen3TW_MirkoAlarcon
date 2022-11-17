import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {
  selectCategoria: string ='';
  categoria: any =[
    'Streaming - Carlos Camargo',
    'Gaming - Geraldine Ibieta',
    'Music - Mirko Alarcon'
  ];
 
  formularioDeServicios:FormGroup;

  constructor(
      public formulario:FormBuilder,
      private crudService:CrudService,
      // private ruteador:Router
    ){ 
    this.formularioDeServicios=this.formulario.group({
      nombre:[''],
      correo:[''],
      vendedor:['']
    })
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log("Funciona");
    console.log(this.formularioDeServicios.value);
    this.crudService.AgregarVendedor(this.formularioDeServicios.value).subscribe();

   // this.ruteador.navigateByUrl('/listar-empleado')
  }

  radioChangeHandler (event:any){
    this.selectCategoria =event.target.value;
  }


}
