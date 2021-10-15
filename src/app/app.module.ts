import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbModule } from 'mdb-angular-ui-kit';
import { SimplebarAngularModule } from 'simplebar-angular';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material/material.module';
import { ProductsModule } from './products/products.module';
import { BuildSystemModule } from './build-system/build-system.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ProcessorsFilterComponent } from './product-filters/processors-filter/processors-filter.component';
import { MotherboardsFilterComponent } from './product-filters/motherboards-filter/motherboards-filter.component';
import { MemoryFilterComponent } from './product-filters/memory-filter/memory-filter.component';
import { PowerSuppliesFilterComponent } from './product-filters/power-supplies-filter/power-supplies-filter.component';
import { GraphicsCardsFilterComponent } from './product-filters/graphics-cards-filter/graphics-cards-filter.component';
import { CoolersFilterComponent } from './product-filters/coolers-filter/coolers-filter.component';
import { CabinatesFilterComponent } from './product-filters/cabinates-filter/cabinates-filter.component';
import { StoragesFilterComponent } from './product-filters/storages-filter/storages-filter.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductFiltersComponent,
        ProcessorsFilterComponent,
        MotherboardsFilterComponent,
        MemoryFilterComponent,
        PowerSuppliesFilterComponent,
        GraphicsCardsFilterComponent,
        CoolersFilterComponent,
        CabinatesFilterComponent,
        StoragesFilterComponent,
    ],
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
        SimplebarAngularModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
