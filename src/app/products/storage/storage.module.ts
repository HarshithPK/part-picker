import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { StorageAddComponent } from './storage-add/storage-add.component';
import { StorageDetailComponent } from './storage-detail/storage-detail.component';
import { StorageRoutingModule } from './storage-routing.module';
import { StorageStartComponent } from './storage-start/storage-start.component';
import { StorageComponent } from './storage.component';

@NgModule({
    declarations: [
        StorageComponent,
        StorageStartComponent,
        StorageDetailComponent,
        StorageAddComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        StorageRoutingModule,
        SimplebarAngularModule,
    ],
})
export class StorageModule {}
