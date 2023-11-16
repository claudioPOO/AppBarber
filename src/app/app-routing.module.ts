import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Params } from '@angular/router';
import { ClientComponent } from 'src/app/client/client.component';
import { TurnosComponent } from 'src/app/Turn/turnos.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ServicesComponent } from 'src/app/service/services.component';
import { VerTurnosComponent } from 'src/app/Turn/verTurnos.component';
import { BarberComponent } from './barbers/barbers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'barbero', component: BarberComponent },
  { path: 'cliente', component: ClientComponent },
  { path: 'solicitarTurno', component: TurnosComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'verTurnos/:idcliente', component: VerTurnosComponent },
  { path: '**', component: HomeComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
