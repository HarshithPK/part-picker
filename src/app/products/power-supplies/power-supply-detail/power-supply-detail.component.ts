import { Component, OnInit } from '@angular/core';
import { PowerSupply } from '../power-supply.model';

@Component({
    selector: 'app-power-supply-detail',
    templateUrl: './power-supply-detail.component.html',
    styleUrls: ['./power-supply-detail.component.scss'],
})
export class PowerSupplyDetailComponent implements OnInit {
    powerSupply: PowerSupply = new PowerSupply(
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
    );

    constructor() {}

    ngOnInit(): void {}
}
