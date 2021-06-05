import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './shared/material/material.module';
import { BuildSystemComponent } from './build-system/build-system.component';
import { ProductsComponent } from './products/products.component';
import { ProcessorsComponent } from './products/processors/processors.component';
import { ProcessorDetailComponent } from './products/processors/processor-detail/processor-detail.component';
import { MotherboardsComponent } from './products/motherboards/motherboards.component';
import { MotherboardDetailComponent } from './products/motherboards/motherboard-detail/motherboard-detail.component';
import { ProductsStartComponent } from './products/products-start/products-start.component';
import { ProcessorsStartComponent } from './products/processors/processors-start/processors-start.component';
import { MotherboardsStartComponent } from './products/motherboards/motherboards-start/motherboards-start.component';
import { MemoryComponent } from './products/memory/memory.component';
import { MemoryStartComponent } from './products/memory/memory-start/memory-start.component';
import { MemoryDetailComponent } from './products/memory/memory-detail/memory-detail.component';
import { CoolersComponent } from './products/coolers/coolers.component';
import { CoolersStartComponent } from './products/coolers/coolers-start/coolers-start.component';
import { CoolerDetailComponent } from './products/coolers/cooler-detail/cooler-detail.component';
import { GraphicsCardsComponent } from './products/graphics-card/graphics-cards.component';
import { GraphicsCardsStartComponent } from './products/graphics-card/graphics-card-start/graphics-cards-start.component';
import { GraphicsCardDetailComponent } from './products/graphics-card/graphics-card-detail/graphics-card-detail.component';
import { PowerSuppliesComponent } from './products/power-supplies/power-supplies.component';
import { PowerSuppliesStartComponent } from './products/power-supplies/power-supplies-start/power-supplies-start.component';
import { PowerSupplyDetailComponent } from './products/power-supplies/power-supply-detail/power-supply-detail.component';
import { StorageComponent } from './products/storage/storage.component';
import { StorageStartComponent } from './products/storage/storage-start/storage-start.component';
import { StorageDetailComponent } from './products/storage/storage-detail/storage-detail.component';
import { CabinatesComponent } from './products/cabinates/cabinates.component';
import { CabinatesStartComponent } from './products/cabinates/cabinates-start/cabinates-start.component';
import { CabinateDetailComponent } from './products/cabinates/cabinate-detail/cabinate-detail.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { DevExtremeModule } from 'devextreme-angular';
import { CabinateAddComponent } from './products/cabinates/cabinate-add/cabinate-add.component';
import { CoolerAddComponent } from './products/coolers/cooler-add/cooler-add.component';
import { GraphicsCardAddComponent } from './products/graphics-card/graphics-card-add/graphics-card-add.component';
import { MemoryAddComponent } from './products/memory/memory-add/memory-add.component';
import { MotherboardAddComponent } from './products/motherboards/motherboard-add/motherboard-add.component';
import { PowerSupplyAddComponent } from './products/power-supplies/power-supply-add/power-supply-add.component';
import { ProcessorAddComponent } from './products/processors/processor-add/processor-add.component';
import { StorageAddComponent } from './products/storage/storage-add/storage-add.component';

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
        MemoryComponent,
        MemoryStartComponent,
        MemoryDetailComponent,
        CoolersComponent,
        CoolersStartComponent,
        CoolerDetailComponent,
        GraphicsCardsComponent,
        GraphicsCardsStartComponent,
        GraphicsCardDetailComponent,
        PowerSuppliesComponent,
        PowerSuppliesStartComponent,
        PowerSupplyDetailComponent,
        StorageComponent,
        StorageStartComponent,
        StorageDetailComponent,
        CabinatesComponent,
        CabinatesStartComponent,
        CabinateDetailComponent,
        AuthComponent,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
        CabinateAddComponent,
        CoolerAddComponent,
        GraphicsCardAddComponent,
        MemoryAddComponent,
        MotherboardAddComponent,
        PowerSupplyAddComponent,
        ProcessorAddComponent,
        StorageAddComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DevExtremeModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        AppRoutingModule,
        MdbModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
