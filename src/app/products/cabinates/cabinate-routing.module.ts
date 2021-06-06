import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CabinateAddComponent } from './cabinate-add/cabinate-add.component';
import { CabinateDetailComponent } from './cabinate-detail/cabinate-detail.component';
import { CabinatesResolverService } from './cabinates-resolver.service';
import { CabinatesStartComponent } from './cabinates-start/cabinates-start.component';
import { CabinatesComponent } from './cabinates.component';

const routes: Routes = [
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
                path: 'add-cabinate',
                component: CabinateAddComponent,
            },
            {
                path: ':id',
                component: CabinateDetailComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CabinateRoutingModule {}
