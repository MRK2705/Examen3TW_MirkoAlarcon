import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/modificar-empleado/modificar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import { VendedoresComponent } from './componentes/vendedores/vendedores.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';
import { HomeComponent } from './componentes/home/home.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'home'},
  {path: 'agregar-empleado',component:AgregarEmpleadoComponent},
  {path: 'listar-empleado',component:ListarEmpleadoComponent},
  {path: 'editar-empleado/:id',component:EditarEmpleadoComponent},
  {path: 'plantel',component:ListarEmpleadoComponent},
  {path:'vendedores',component:VendedoresComponent},
  {path:'reserva', component:ReservasComponent},
  {path:'home',component:HomeComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'contactos',component:ContactosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
