import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildSystemComponent } from './build-system/build-system.component';
import { CoolerDetailComponent } from './products/coolers/cooler-detail/cooler-detail.component';
import { CoolersStartComponent } from './products/coolers/coolers-start/coolers-start.component';
import { CoolersComponent } from './products/coolers/coolers.component';
import { MemoryDetailComponent } from './products/memory/memory-detail/memory-detail.component';
import { MemoryStartComponent } from './products/memory/memory-start/memory-start.component';
import { MemoryComponent } from './products/memory/memory.component';
import { MotherboardDetailComponent } from './products/motherboards/motherboard-detail/motherboard-detail.component';
import { MotherboardsStartComponent } from './products/motherboards/motherboards-start/motherboards-start.component';
import { MotherboardsComponent } from './products/motherboards/motherboards.component';
import { ProcessorDetailComponent } from './products/processors/processor-detail/processor-detail.component';
import { ProcessorsStartComponent } from './products/processors/processors-start/processors-start.component';
import { ProcessorsComponent } from './products/processors/processors.component';
import { ProductsStartComponent } from './products/products-start/products-start.component';
import { ProductsComponent } from './products/products.component';

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
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
