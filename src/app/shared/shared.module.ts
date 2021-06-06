import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

@NgModule({
    declarations: [
        AlertComponent,
        PlaceholderDirective,
        LoadingSpinnerComponent,
    ],
    imports: [CommonModule],
    exports: [AlertComponent, PlaceholderDirective, LoadingSpinnerComponent],
})
export class SharedModule {}
