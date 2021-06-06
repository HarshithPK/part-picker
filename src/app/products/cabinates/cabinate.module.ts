import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { CabinateAddComponent } from './cabinate-add/cabinate-add.component';
import { CabinateDetailComponent } from './cabinate-detail/cabinate-detail.component';
import { CabinateRoutingModule } from './cabinate-routing.module';
import { CabinatesStartComponent } from './cabinates-start/cabinates-start.component';
import { CabinatesComponent } from './cabinates.component';

@NgModule({
    declarations: [
        CabinatesComponent,
        CabinatesStartComponent,
        CabinateDetailComponent,
        CabinateAddComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        CabinateRoutingModule,
    ],
})
export class CabinateModule {}
