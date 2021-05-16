import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './header/material/material.module';
import { BuildSystemComponent } from './build-system/build-system.component';
import { ProductsComponent } from './products/products.component';
import { ProcessorsComponent } from './products/processors/processors.component';
import { ProcessorDetailComponent } from './products/processors/processor-detail/processor-detail.component';
import { MotherboardsComponent } from './products/motherboards/motherboards.component';
import { MotherboardDetailComponent } from './products/motherboards/motherboard-detail/motherboard-detail.component';
import { ProductsStartComponent } from './products/products-start/products-start.component';
import { ProcessorsStartComponent } from './products/processors/processors-start/processors-start.component';
import { MotherboardsStartComponent } from './products/motherboards/motherboards-start/motherboards-start.component';

export const appRoutes = [];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BuildSystemComponent,
        ProductsComponent,
        ProcessorsComponent,
        ProcessorDetailComponent,
        MotherboardsComponent,
        MotherboardDetailComponent,
        ProductsStartComponent,
        ProcessorsStartComponent,
        MotherboardsStartComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        MdbModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
