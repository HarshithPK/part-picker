import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material/material.module';

import { AuthGuard } from '../auth/auth.guard';
import { BuildSystemComponent } from './build-system.component';

@NgModule({
    declarations: [BuildSystemComponent],
    imports: [
        RouterModule.forChild([
            {
                path: 'build-system',
                component: BuildSystemComponent,
                canActivate: [AuthGuard],
            },
        ]),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    exports: [BuildSystemComponent],
})
export class BuildSystemModule {}
