import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProcessorAddComponent } from './processor-add/processor-add.component';
import { ProcessorDetailComponent } from './processor-detail/processor-detail.component';
import { ProcessorsResolverService } from './processors-resolver.service';
import { ProcessorsStartComponent } from './processors-start/processors-start.component';
import { ProcessorsComponent } from './processors.component';

const routes: Routes = [
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
            { path: 'add-processor', component: ProcessorAddComponent },
            {
                path: ':id',
                component: ProcessorDetailComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProcessorRoutingModule {}
