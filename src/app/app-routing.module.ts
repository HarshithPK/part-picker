import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildSystemComponent } from './build-system/build-system.component';
import { CabinateDetailComponent } from './products/cabinates/cabinate-detail/cabinate-detail.component';
import { CabinatesStartComponent } from './products/cabinates/cabinates-start/cabinates-start.component';
import { CabinatesComponent } from './products/cabinates/cabinates.component';
import { CoolerDetailComponent } from './products/coolers/cooler-detail/cooler-detail.component';
import { CoolersStartComponent } from './products/coolers/coolers-start/coolers-start.component';
import { CoolersComponent } from './products/coolers/coolers.component';
import { GraphicsCardDetailComponent } from './products/graphics-card/graphics-card-detail/graphics-card-detail.component';
import { GraphicsCardsStartComponent } from './products/graphics-card/graphics-card-start/graphics-cards-start.component';
import { GraphicsCardsComponent } from './products/graphics-card/graphics-cards.component';
import { MemoryDetailComponent } from './products/memory/memory-detail/memory-detail.component';
import { MemoryStartComponent } from './products/memory/memory-start/memory-start.component';
import { MemoryComponent } from './products/memory/memory.component';
import { MotherboardDetailComponent } from './products/motherboards/motherboard-detail/motherboard-detail.component';
import { MotherboardsStartComponent } from './products/motherboards/motherboards-start/motherboards-start.component';
import { MotherboardsComponent } from './products/motherboards/motherboards.component';
import { PowerSuppliesStartComponent } from './products/power-supplies/power-supplies-start/power-supplies-start.component';
import { PowerSuppliesComponent } from './products/power-supplies/power-supplies.component';
import { PowerSupplyDetailComponent } from './products/power-supplies/power-supply-detail/power-supply-detail.component';
import { ProcessorDetailComponent } from './products/processors/processor-detail/processor-detail.component';
import { ProcessorsStartComponent } from './products/processors/processors-start/processors-start.component';
import { ProcessorsComponent } from './products/processors/processors.component';
import { ProductsStartComponent } from './products/products-start/products-start.component';
import { ProductsComponent } from './products/products.component';
import { StorageDetailComponent } from './products/storage/storage-detail/storage-detail.component';
import { StorageStartComponent } from './products/storage/storage-start/storage-start.component';
import { StorageComponent } from './products/storage/storage.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/build-system', pathMatch: 'full' },
    { path: 'build-system', component: BuildSystemComponent },
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            { path: '', component: ProductsStartComponent, pathMatch: 'full' },
            {
                path: 'processors',
                component: ProcessorsComponent,
                children: [
                    {
                        path: '',
                        component: ProcessorsStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: 'processor-datail',
                        component: ProcessorDetailComponent,
                    },
                ],
            },
            {
                path: 'motherboards',
                component: MotherboardsComponent,
                children: [
                    {
                        path: '',
                        component: MotherboardsStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: 'motherboard-datail',
                        component: MotherboardDetailComponent,
                    },
                ],
            },
            {
                path: 'memory',
                component: MemoryComponent,
                children: [
                    {
                        path: '',
                        component: MemoryStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: 'memory-datail',
                        component: MemoryDetailComponent,
                    },
                ],
            },
            {
                path: 'coolers',
                component: CoolersComponent,
                children: [
                    {
                        path: '',
                        component: CoolersStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: 'cooler-datail',
                        component: CoolerDetailComponent,
                    },
                ],
            },
            {
                path: 'graphics-cards',
                component: GraphicsCardsComponent,
                children: [
                    {
                        path: '',
                        component: GraphicsCardsStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: 'graphics-card-datail',
                        component: GraphicsCardDetailComponent,
                    },
                ],
            },
            {
                path: 'power-supplies',
                component: PowerSuppliesComponent,
                children: [
                    {
                        path: '',
                        component: PowerSuppliesStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: 'power-supply-datail',
                        component: PowerSupplyDetailComponent,
                    },
                ],
            },
            {
                path: 'storage',
                component: StorageComponent,
                children: [
                    {
                        path: '',
                        component: StorageStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: 'storage-datail',
                        component: StorageDetailComponent,
                    },
                ],
            },
            {
                path: 'cabinates',
                component: CabinatesComponent,
                children: [
                    {
                        path: '',
                        component: CabinatesStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: 'cabinate-datail',
                        component: CabinateDetailComponent,
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
