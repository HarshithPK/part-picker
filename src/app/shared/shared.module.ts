import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

NgModule({
    declarations: [AlertComponent, PlaceholderDirective],
    imports: [CommonModule],
    exports: [CommonModule, AlertComponent, PlaceholderDirective],
});
export class SharedModule {}
