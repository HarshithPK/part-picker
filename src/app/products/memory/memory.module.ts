import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { SimplebarAngularModule } from 'simplebar-angular';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { MemoryAddComponent } from './memory-add/memory-add.component';
import { MemoryDetailComponent } from './memory-detail/memory-detail.component';
import { MemoryRoutingModule } from './memory-routing.module';
import { MemoryStartComponent } from './memory-start/memory-start.component';
import { MemoryComponent } from './memory.component';

@NgModule({
    declarations: [
        MemoryComponent,
        MemoryStartComponent,
        MemoryDetailComponent,
        MemoryAddComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MemoryRoutingModule,
        SimplebarAngularModule,
        NgxImageZoomModule,
    ],
})
export class MemoryModule {}
