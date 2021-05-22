import { Component, OnInit } from '@angular/core';

import { Cabinate } from '../cabinate.model';

@Component({
    selector: 'app-cabinate-detail',
    templateUrl: './cabinate-detail.component.html',
    styleUrls: ['./cabinate-detail.component.scss'],
})
export class CabinateDetailComponent implements OnInit {
    cabinate: Cabinate = new Cabinate(
        'LIAN LI',
        'Lian Li Dynamic',
        'Lian Li PC-O11 Dynamic ATX Full Tower Case',
        'ATX Full Tower',
        'None',
        'Silver',
        '(D) 471 x (W) 285 x (H) 513 mm',
        '4 X USB 3.0 (2 on the front, 2 at the front case feet), 1 X USB 3.1 TYPE-C, 1 X HD AUDIO',
        'E-ATX/ATX/M-ATX/ITX',
        'Tempered Glass',
        '1.0 mm ALUMINUM EXTERIOR, 4.0 mm TEMPERED GLASS LEFT SIDE AND FRONT PANELS, 1.0 mm SPCC INTERIOR',
        220,
        446,
        167,
        '3 X 120 mm (side) + 1 X 120 mm (rear) + 3 X 120 mm/2 x 140 mm (base) + 3 X 120 mm/2 x 140 mm (top) (Optional)',
        '1 X TOP, 1 X BOTTOM, 2 X SIDE',
        'https://lian-li.com/wp-content/uploads/2020/11/O11D-XL_Silver_side45.jpg',
        18300
    );

    constructor() {}

    ngOnInit(): void {}
}
