import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { SimplebarAngularModule } from 'simplebar-angular';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { CoolerAddComponent } from './cooler-add/cooler-add.component';
import { CoolerDetailComponent } from './cooler-detail/cooler-detail.component';
import { CoolerRoutingModule } from './cooler-routing.module';
import { CoolersStartComponent } from './coolers-start/coolers-start.component';
import { CoolersComponent } from './coolers.component';

@NgModule({
    declarations: [
        CoolersComponent,
        CoolersStartComponent,
        CoolerDetailComponent,
        CoolerAddComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        CoolerRoutingModule,
        SimplebarAngularModule,
        NgxImageZoomModule,
    ],
})
export class CoolerModule {}
