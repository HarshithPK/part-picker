import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SimplebarAngularModule } from 'simplebar-angular';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { PowerSuppliesStartComponent } from './power-supplies-start/power-supplies-start.component';
import { PowerSuppliesComponent } from './power-supplies.component';
import { PowerSupplyAddComponent } from './power-supply-add/power-supply-add.component';
import { PowerSupplyDetailComponent } from './power-supply-detail/power-supply-detail.component';
import { PowerSupplyRoutingModule } from './power-supply-routing.module';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
    declarations: [
        PowerSuppliesComponent,
        PowerSuppliesStartComponent,
        PowerSupplyDetailComponent,
        PowerSupplyAddComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        PowerSupplyRoutingModule,
        NgxSliderModule,
        SimplebarAngularModule,
        NgxImageZoomModule,
    ],
})
export class PowerSupplyModule {}
