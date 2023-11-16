import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
],
  declarations: [SidebarComponent],
  providers: [],
  exports: [SidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class SidebarModule {}