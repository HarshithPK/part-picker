import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StorageAddComponent } from './storage-add/storage-add.component';
import { StorageDetailComponent } from './storage-detail/storage-detail.component';
import { StorageStartComponent } from './storage-start/storage-start.component';
import { StorageComponent } from './storage.component';
import { StoragesResolverService } from './storages-resolver.service';

const routes: Routes = [
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
            { path: 'add-storage', component: StorageAddComponent },
            {
                path: ':id',
                component: StorageDetailComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StorageRoutingModule {}
