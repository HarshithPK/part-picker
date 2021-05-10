import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    imports: [MatToolbarModule, MatIconModule, MatRippleModule, MatMenuModule],
    exports: [MatToolbarModule, MatIconModule, MatRippleModule, MatMenuModule],
})
export class MaterialModule {}
