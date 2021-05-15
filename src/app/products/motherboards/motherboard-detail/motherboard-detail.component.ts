import { Component, OnInit } from '@angular/core';
import { Motherboard } from '../motherboard.model';

@Component({
    selector: 'app-motherboard-detail',
    templateUrl: './motherboard-detail.component.html',
    styleUrls: ['./motherboard-detail.component.scss'],
})
export class MotherboardDetailComponent implements OnInit {
    motherboard: Motherboard = new Motherboard(
        'ASUS',
        'Asus Rog Crosshair',
        'Asus ROG Crosshair VIII Dark Hero',
        'AM 4',
        'AMD X570',
        'ATX',
        'AMD Ryzen 5000 Series, AMD Ryzen 4000 G Series, AMD Ryzen 3000 Series, AMD Ryzen 3000 G Series, AMD Ryzen 2000 Series, AMD Ryzen 2000 G Series',
        128,
        'DDR4',
        4,
        [
            'DDR4-2133',
            'DDR4-2400',
            'DDR4-2666',
            'DDR4-2800',
            'DDR4-2933',
            'DDR4-3000',
            'DDR4-3200',
            'DDR4-3400',
            'DDR4-3466',
            'DDR4-3600',
            'DDR4-3733',
            'DDR4-3866',
            'DDR4-4000',
            'DDR4-4133',
            'DDR4-4266',
            'DDR4-4400',
            'DDR4-4600',
            'DDR4-4666',
            'DDR4-4800',
            'DDR4-4866',
        ],
        ['CrossFire Capable', '2-Way SLI Capable'],
        3,
        0,
        0,
        1,
        0,
        ['2242/2260/2280 M-key', '2242/2260/2280/22110 M-key'],
        8,
        '1 x 1 Gbit/s, 1 x 2.5 Gbit/s',
        2,
        1,
        1,
        0,
        'Wi-Fi 6',
        'https://dlcdnwebimgs.asus.com/gain/5D031BFD-26B9-4953-9038-F608F1F00865/w717/h525',
        41500
    );

    constructor() {}

    ngOnInit(): void {}
}
