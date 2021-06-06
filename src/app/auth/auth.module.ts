import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';

import { AuthComponent } from './auth.component';

@NgModule({
    declarations: [AuthComponent],
    imports: [
        RouterModule.forChild([
            {
                path: 'authentication',
                component: AuthComponent,
            },
        ]),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        SharedModule,
    ],
})
export class AuthModule {}
