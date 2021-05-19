import { Component, OnInit } from '@angular/core';
import { PowerSupply } from '../power-supply.model';

@Component({
    selector: 'app-power-supplies-start',
    templateUrl: './power-supplies-start.component.html',
    styleUrls: ['./power-supplies-start.component.scss'],
})
export class PowerSuppliesStartComponent implements OnInit {
    powerSupplies: PowerSupply[] = [
        new PowerSupply(
            'ASUS',
            'Asus ROG Thor',
            'Asus ROG Thor 1200P 80+ Platinum Certified Fully Modular',
            'ATX',
            '80+ Platinum',
            1200,
            'Full-Modular',
            190,
            'Black',
            'No',
            2,
            8,
            12,
            5,
            'https://dlcdnwebimgs.asus.com/gain/684DD066-82FC-4C2B-A0DB-7957EA004D40/w1000/h732',
            32370
        ),
        new PowerSupply(
            'CORSAIR',
            'Corsair AXi',
            'Corsair AX1600i Digital 80+ Titanium Certified Fully Modular',
            'ATX',
            '80+ Titanium',
            1600,
            'Full-Modular',
            200,
            'Black',
            'No',
            2,
            8,
            5,
            3,
            'https://www.corsair.com/medias/sys_master/images/images/h28/h91/9210973618206/-CP-9020087-EU-Gallery-AX1600i-01.png',
            38500
        ),
        new PowerSupply(
            'GIGABYTE',
            'Gigabyte Aorus',
            'Gigabyte AORUS P GM 850 W 80+ Gold Certified Fully Modular',
            'ATX',
            '80+ Gold',
            850,
            'Full-Modular',
            160,
            'Black/Silver',
            'No',
            2,
            6,
            6,
            5,
            'https://static.gigabyte.com/StaticFile/Image/Global/8e239ff9e33f26d0bcdf33bc177ccdc9/Product/19960/webp/1000',
            11500
        ),
    ];

    constructor() {}

    ngOnInit(): void {}
}
