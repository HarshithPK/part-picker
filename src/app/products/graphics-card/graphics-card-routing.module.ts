import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphicsCardAddComponent } from './graphics-card-add/graphics-card-add.component';
import { GraphicsCardDetailComponent } from './graphics-card-detail/graphics-card-detail.component';
import { GraphicsCardsStartComponent } from './graphics-card-start/graphics-cards-start.component';
import { GraphicsCardsResolverService } from './graphics-cards-resolver.service';
import { GraphicsCardsComponent } from './graphics-cards.component';

const routes: Routes = [
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
                path: 'add-graphics-card',
                component: GraphicsCardAddComponent,
            },
            {
                path: ':id',
                component: GraphicsCardDetailComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GraphicsCardRoutingModule {}
