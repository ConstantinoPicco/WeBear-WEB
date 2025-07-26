import { Routes } from '@angular/router';
import { NosotrosComponent } from './components/nosotros/nosotros';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'nosotros', pathMatch: 'full' },
  {
    path: 'nosotros',
    component: NosotrosComponent,
    data: { animation: 'NosotrosPage' }
  },
  {
    path: 'servicios',
    component: ServiciosComponent,
    data: { animation: 'ServiciosPage' }
  },
  {
    path: 'proyectos',
    component: ProyectosComponent,
    data: { animation: 'ProyectosPage' }
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    data: { animation: 'ContactoPage' }
  }
];
