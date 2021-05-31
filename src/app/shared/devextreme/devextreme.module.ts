import { NgModule } from '@angular/core';
import {
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
} from 'devextreme-angular';

@NgModule({
    exports: [DxDataGridModule, DxTemplateModule, DxBulletModule],
})
export class DevextremeModule {}
