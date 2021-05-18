import { Component, OnInit } from '@angular/core';
import { Cooler } from '../cooler.model';

@Component({
    selector: 'app-cooler-detail',
    templateUrl: './cooler-detail.component.html',
    styleUrls: ['./cooler-detail.component.scss'],
})
export class CoolerDetailComponent implements OnInit {
    cooler: Cooler = new Cooler(
        'NOCTUA',
        'Noctua NH-D15',
        'Noctua NH-D15 Chromax.Black',
        '300 - 1500 RPM',
        160,
        165,
        '19.2 - 24.6 dB',
        [
            'AM2',
            'AM2+',
            'AM3',
            'AM3+',
            'AM4',
            'FM1',
            'FM2',
            'FM2+',
            'LGA1150',
            'LGA1151',
            'LGA1155',
            'LGA1156',
            'LGA1200',
            'LGA2011',
            'LGA2011-3',
            'LGA2066',
        ],
        'Black',
        'No',
        'No',
        'https://noctua.at/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/n/h/nh_d15_chromax_black_1_4.jpg',
        9549
    );

    constructor() {}

    ngOnInit(): void {}
}
