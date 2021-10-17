import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { MotherboardAddComponent } from './motherboard-add/motherboard-add.component';
import { MotherboardDetailComponent } from './motherboard-detail/motherboard-detail.component';
import { MotherboardRoutingModule } from './motherboard-routing.module';
import { MotherboardsStartComponent } from './motherboards-start/motherboards-start.component';
import { MotherboardsComponent } from './motherboards.component';

@NgModule({
    declarations: [
        MotherboardsComponent,
        MotherboardDetailComponent,
        MotherboardsStartComponent,
        MotherboardAddComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MotherboardRoutingModule,
        SimplebarAngularModule,
    ],
})
export class MotherboardModule {}
