import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PowerSuppliesStartComponent } from './power-supplies-start/power-supplies-start.component';
import { PowerSuppliesComponent } from './power-supplies.component';
import { PowerSuppliesResolverService } from './power-supplies.resolver.service';
import { PowerSupplyAddComponent } from './power-supply-add/power-supply-add.component';
import { PowerSupplyDetailComponent } from './power-supply-detail/power-supply-detail.component';

const routes: Routes = [
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
                path: 'add-power-supply',
                component: PowerSupplyAddComponent,
            },
            {
                path: ':id',
                component: PowerSupplyDetailComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PowerSupplyRoutingModule {}
