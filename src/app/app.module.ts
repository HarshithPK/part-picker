import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbModule } from 'mdb-angular-ui-kit';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material/material.module';
import { ProductsModule } from './products/products.module';
import { BuildSystemModule } from './build-system/build-system.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule,
        AppRoutingModule,
        MdbModule,
        HttpClientModule,
        ProductsModule,
        BuildSystemModule,
        SharedModule,
        CoreModule,
        AuthModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
