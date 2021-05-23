import { Component, OnInit } from '@angular/core';

import { PowerSupply } from '../power-supply.model';
import { PowerSupplyService } from '../power-supply.service';

@Component({
    selector: 'app-power-supplies-start',
    templateUrl: './power-supplies-start.component.html',
    styleUrls: ['./power-supplies-start.component.scss'],
})
export class PowerSuppliesStartComponent implements OnInit {
    powerSupplies!: PowerSupply[];

    constructor(private powerSupplyService: PowerSupplyService) {}

    ngOnInit(): void {
        this.powerSupplies = this.powerSupplyService.getPowerSupplies();
    }

    storePowerSupply(): void {
        this.powerSupplyService.storePowerSupply();
    }

    loadPowerSupply(): void {}
}
