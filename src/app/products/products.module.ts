import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material/material.module';
import { CabinateModule } from './cabinates/cabinate.module';
import { CoolerModule } from './coolers/cooler.module';
import { GraphicsCardModule } from './graphics-card/graphics-card.module';
import { MemoryModule } from './memory/memory.module';
import { MotherboardModule } from './motherboards/motherboard.module';
import { PowerSupplyModule } from './power-supplies/power-supply.module';
import { ProcessorModule } from './processors/processor.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsStartComponent } from './products-start/products-start.component';
import { ProductsComponent } from './products.component';
import { StorageModule } from './storage/storage.module';

@NgModule({
    declarations: [ProductsComponent, ProductsStartComponent],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        CabinateModule,
        CoolerModule,
        GraphicsCardModule,
        MemoryModule,
        MotherboardModule,
        PowerSupplyModule,
        ProcessorModule,
        StorageModule,
        ProductsRoutingModule,
    ],

    exports: [ProductsComponent, ProductsStartComponent],
})
export class ProductsModule {}
