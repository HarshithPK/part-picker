import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoolerAddComponent } from './cooler-add/cooler-add.component';
import { CoolerDetailComponent } from './cooler-detail/cooler-detail.component';
import { CoolersResolcerService } from './coolers-resolver.service';
import { CoolersStartComponent } from './coolers-start/coolers-start.component';
import { CoolersComponent } from './coolers.component';

const routes: Routes = [
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
            { path: 'add-cooler', component: CoolerAddComponent },
            {
                path: ':id',
                component: CoolerDetailComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoolerRoutingModule {}
