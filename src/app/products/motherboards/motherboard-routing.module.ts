import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MotherboardAddComponent } from './motherboard-add/motherboard-add.component';
import { MotherboardDetailComponent } from './motherboard-detail/motherboard-detail.component';
import { MotherboardsResolverService } from './motherboards-resolver.service';
import { MotherboardsStartComponent } from './motherboards-start/motherboards-start.component';
import { MotherboardsComponent } from './motherboards.component';

const routes: Routes = [
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
                path: 'add-motherboard',
                component: MotherboardAddComponent,
            },
            {
                path: ':id',
                component: MotherboardDetailComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MotherboardRoutingModule {}
