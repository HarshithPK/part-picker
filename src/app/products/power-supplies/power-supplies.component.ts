import { Component, OnInit } from '@angular/core';

import { PowerSupplyService } from './power-supply.service';

@Component({
    selector: 'app-power-supplies',
    templateUrl: './power-supplies.component.html',
    styleUrls: ['./power-supplies.component.scss'],
    providers: [PowerSupplyService],
})
export class PowerSuppliesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
