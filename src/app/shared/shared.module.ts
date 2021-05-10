import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

NgModule({
    declarations: [
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
    ],
    imports: [CommonModule],
    exports: [
        CommonModule,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
    ],
});
export class SharedModule {}
