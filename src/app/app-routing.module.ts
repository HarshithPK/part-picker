import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { BuildSystemComponent } from './build-system/build-system.component';
import { CabinateDetailComponent } from './products/cabinates/cabinate-detail/cabinate-detail.component';
import { CabinatesResolverService } from './products/cabinates/cabinates-resolver.service';
import { CabinatesStartComponent } from './products/cabinates/cabinates-start/cabinates-start.component';
import { CabinatesComponent } from './products/cabinates/cabinates.component';
import { CoolerDetailComponent } from './products/coolers/cooler-detail/cooler-detail.component';
import { CoolersResolcerService } from './products/coolers/coolers-resolver.service';
import { CoolersStartComponent } from './products/coolers/coolers-start/coolers-start.component';
import { CoolersComponent } from './products/coolers/coolers.component';
import { GraphicsCardDetailComponent } from './products/graphics-card/graphics-card-detail/graphics-card-detail.component';
import { GraphicsCardsResolverService } from './products/graphics-card/graphics-cards-resolver.service';
import { GraphicsCardsStartComponent } from './products/graphics-card/graphics-card-start/graphics-cards-start.component';
import { GraphicsCardsComponent } from './products/graphics-card/graphics-cards.component';
import { MemoryDetailComponent } from './products/memory/memory-detail/memory-detail.component';
import { MemoryResolverService } from './products/memory/memory-resolver.service';
import { MemoryStartComponent } from './products/memory/memory-start/memory-start.component';
import { MemoryComponent } from './products/memory/memory.component';
import { MotherboardDetailComponent } from './products/motherboards/motherboard-detail/motherboard-detail.component';
import { MotherboardsResolverService } from './products/motherboards/motherboards-resolver.service';
import { MotherboardsStartComponent } from './products/motherboards/motherboards-start/motherboards-start.component';
import { MotherboardsComponent } from './products/motherboards/motherboards.component';
import { PowerSuppliesStartComponent } from './products/power-supplies/power-supplies-start/power-supplies-start.component';
import { PowerSuppliesComponent } from './products/power-supplies/power-supplies.component';
import { PowerSuppliesResolverService } from './products/power-supplies/power-supplies.resolver.service';
import { PowerSupplyDetailComponent } from './products/power-supplies/power-supply-detail/power-supply-detail.component';
import { ProcessorDetailComponent } from './products/processors/processor-detail/processor-detail.component';
import { ProcessorsResolverService } from './products/processors/processors-resolver.service';
import { ProcessorsStartComponent } from './products/processors/processors-start/processors-start.component';
import { ProcessorsComponent } from './products/processors/processors.component';
import { ProductsStartComponent } from './products/products-start/products-start.component';
import { ProductsComponent } from './products/products.component';
import { StorageDetailComponent } from './products/storage/storage-detail/storage-detail.component';
import { StorageStartComponent } from './products/storage/storage-start/storage-start.component';
import { StorageComponent } from './products/storage/storage.component';
import { StoragesResolverService } from './products/storage/storages-resolver.service';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: '', redirectTo: '/build-system', pathMatch: 'full' },
    {
        path: 'build-system',
        component: BuildSystemComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: ProductsStartComponent, pathMatch: 'full' },
            {
                path: 'processors',
                component: ProcessorsComponent,
                resolve: [ProcessorsResolverService],
                children: [
                    {
                        path: '',
                        component: ProcessorsStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: ':id',
                        component: ProcessorDetailComponent,
                    },
                ],
            },
            {
                path: 'motherboards',
                component: MotherboardsComponent,
                resolve: [MotherboardsResolverService],
                children: [
                    {
                        path: '',
                        component: MotherboardsStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: ':id',
                        component: MotherboardDetailComponent,
                    },
                ],
            },
            {
                path: 'memory',
                component: MemoryComponent,
                resolve: [MemoryResolverService],
                children: [
                    {
                        path: '',
                        component: MemoryStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: ':id',
                        component: MemoryDetailComponent,
                    },
                ],
            },
            {
                path: 'coolers',
                component: CoolersComponent,
                resolve: [CoolersResolcerService],
                children: [
                    {
                        path: '',
                        component: CoolersStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: ':id',
                        component: CoolerDetailComponent,
                    },
                ],
            },
            {
                path: 'graphics-cards',
                component: GraphicsCardsComponent,
                resolve: [GraphicsCardsResolverService],
                children: [
                    {
                        path: '',
                        component: GraphicsCardsStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: ':id',
                        component: GraphicsCardDetailComponent,
                    },
                ],
            },
            {
                path: 'power-supplies',
                component: PowerSuppliesComponent,
                resolve: [PowerSuppliesResolverService],
                children: [
                    {
                        path: '',
                        component: PowerSuppliesStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: ':id',
                        component: PowerSupplyDetailComponent,
                    },
                ],
            },
            {
                path: 'storage',
                component: StorageComponent,
                resolve: [StoragesResolverService],
                children: [
                    {
                        path: '',
                        component: StorageStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: ':id',
                        component: StorageDetailComponent,
                    },
                ],
            },
            {
                path: 'cabinates',
                component: CabinatesComponent,
                resolve: [CabinatesResolverService],
                children: [
                    {
                        path: '',
                        component: CabinatesStartComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: ':id',
                        component: CabinateDetailComponent,
                    },
                ],
            },
        ],
    },
    { path: 'authentication', component: AuthComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
