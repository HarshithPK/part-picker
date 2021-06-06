import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemoryAddComponent } from './memory-add/memory-add.component';
import { MemoryDetailComponent } from './memory-detail/memory-detail.component';
import { MemoryResolverService } from './memory-resolver.service';
import { MemoryStartComponent } from './memory-start/memory-start.component';
import { MemoryComponent } from './memory.component';

const routes: Routes = [
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
            { path: 'add-memory', component: MemoryAddComponent },
            {
                path: ':id',
                component: MemoryDetailComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MemoryRoutingModule {}
