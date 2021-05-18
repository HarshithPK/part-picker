import { Component, OnInit } from '@angular/core';

import { Memory } from '../momery.model';

@Component({
    selector: 'app-memory-detail',
    templateUrl: './memory-detail.component.html',
    styleUrls: ['./memory-detail.component.scss'],
})
export class MemoryDetailComponent implements OnInit {
    memory = new Memory(
        'CORSAIR',
        'Corsair Dominator Platinum RGB',
        'Corsair Dominator Platinum RGB 64 GB (4 x 16 GB)',
        'Black',
        64,
        'DDR4',
        3200,
        '288-pin DIMM',
        16,
        1.35,
        '16-18-18-36',
        '4 x 16GB',
        'Yes - Anodized Aluminum',
        'Non-ECC / Unbuffered',
        'https://www.corsair.com/ww/en/medias/sys_master/images/images/hf7/h3f/9732298047518/CMT64GX4M4E3200C16/Gallery/DOMINATOR_PLAT_RGB_03/-CMT64GX4M4E3200C16-Gallery-DOMINATOR-PLAT-RGB-03.png_1200Wx1200H',
        87085.39
    );

    constructor() {}

    ngOnInit(): void {}
}
