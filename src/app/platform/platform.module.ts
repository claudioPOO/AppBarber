import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from '../client/client.component';
import { BarberComponent } from '../barbers/barbers.component';
import { TurnosComponent } from '../Turn/turnos.component';
import { VerTurnosComponent } from '../Turn/verTurnos.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { routing,appRoutingProviders} from '../app-routing.module';
@NgModule({
  declarations: [ClientComponent, BarberComponent, TurnosComponent, VerTurnosComponent],
  imports: [CommonModule,routing,SidebarModule],
  providers: [appRoutingProviders],
})
export class PlatformModule {}
