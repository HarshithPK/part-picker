import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { GraphicsCardAddComponent } from './graphics-card-add/graphics-card-add.component';
import { GraphicsCardDetailComponent } from './graphics-card-detail/graphics-card-detail.component';
import { GraphicsCardRoutingModule } from './graphics-card-routing.module';
import { GraphicsCardsStartComponent } from './graphics-card-start/graphics-cards-start.component';
import { GraphicsCardsComponent } from './graphics-cards.component';

@NgModule({
    declarations: [
        GraphicsCardsComponent,
        GraphicsCardsStartComponent,
        GraphicsCardDetailComponent,
        GraphicsCardAddComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        GraphicsCardRoutingModule,
    ],
})
export class GraphicsCardModule {}
