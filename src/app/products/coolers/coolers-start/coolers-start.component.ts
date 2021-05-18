import { Component, OnInit } from '@angular/core';
import { Cooler } from '../cooler.model';

@Component({
    selector: 'app-coolers-start',
    templateUrl: './coolers-start.component.html',
    styleUrls: ['./coolers-start.component.scss'],
})
export class CoolersStartComponent implements OnInit {
    coolers: Cooler[] = [
        new Cooler(
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
        ),
        new Cooler(
            'be quiet!',
            'be quiet! Dark Rock',
            'be quiet! Dark Rock Pro 4',
            '1450 RPM',
            163,
            163,
            '12.8 - 24.3 dB',
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
                'LGA1366',
                'LGA2011',
                'LGA2011-3',
                'LGA2066',
            ],
            'Black',
            'No',
            'No',
            'https://www.bequiet.com/admin/ImageServer.php?ID=bc4c7a15698@be-quiet.net&omitPreview=true&width=535',
            7659
        ),
        new Cooler(
            'COOLER MASTER',
            'Cooler Master MASTERAIR',
            'Cooler Master MASTERAIR MA620M',
            '650 - 2000 RPM',
            165,
            165,
            '8 - 30 dB',
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
            'https://cdn.coolermaster.com/media/assets/1034/ma620m-1-zoom.png',
            8000
        ),
    ];

    constructor() {}

    ngOnInit(): void {}
}
