import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { ProcessorAddComponent } from './processor-add/processor-add.component';
import { ProcessorDetailComponent } from './processor-detail/processor-detail.component';
import { ProcessorRoutingModule } from './processor-routing.module';
import { ProcessorsStartComponent } from './processors-start/processors-start.component';
import { ProcessorsComponent } from './processors.component';

@NgModule({
    declarations: [
        ProcessorsComponent,
        ProcessorDetailComponent,
        ProcessorsStartComponent,
        ProcessorAddComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        ProcessorRoutingModule,
    ],
})
export class ProcessorModule {}
