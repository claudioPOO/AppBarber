import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './service/services.component';
import { PlatformModule } from './platform/platform.module';
import { SidebarModule } from "./sidebar/sidebar.module";
import { LandingModule } from './landing/landing.module';


@NgModule({
    declarations: [
        AppComponent,
        ServicesComponent,
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule,
        PlatformModule,
        routing,
        SidebarModule,
        LandingModule,
    ]
})
export class AppModule {}
