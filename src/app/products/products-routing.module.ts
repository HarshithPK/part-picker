import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsStartComponent } from './products-start/products-start.component';

const routes: Routes = [
    { path: '', component: ProductsStartComponent, pathMatch: 'full' },
    {
        path: 'cabinates',
        loadChildren: () =>
            import('./cabinates/cabinate.module').then((m) => m.CabinateModule),
    },
    {
        path: 'coolers',
        loadChildren: () =>
            import('./coolers/cooler.module').then((m) => m.CoolerModule),
    },
    {
        path: 'graphics-card',
        loadChildren: () =>
            import('./graphics-card/graphics-card.model').then(
                (m) => m.GraphicsCard
            ),
    },
    {
        path: 'memory',
        loadChildren: () =>
            import('./memory/memory.module').then((m) => m.MemoryModule),
    },
    {
        path: 'motherboards',
        loadChildren: () =>
            import('./motherboards/motherboard.module').then(
                (m) => m.MotherboardModule
            ),
    },
    {
        path: 'power-supplies',
        loadChildren: () =>
            import('./power-supplies/power-supply.module').then(
                (m) => m.PowerSupplyModule
            ),
    },
    {
        path: 'processors',
        loadChildren: () =>
            import('./processors/processor.module').then(
                (m) => m.ProcessorModule
            ),
    },
    {
        path: 'storage',
        loadChildren: () =>
            import('./storage/storage.module').then((m) => m.StorageModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule {}
