import { Component, OnInit } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { PowerSupply } from '../power-supply.model';
import { PowerSupplyService } from '../power-supply.service';

@Component({
    selector: 'app-power-supplies-start',
    templateUrl: './power-supplies-start.component.html',
    styleUrls: ['./power-supplies-start.component.scss'],
})
export class PowerSuppliesStartComponent implements OnInit {
    powerSupplies: PowerSupply[] = null!;

    constructor(
        private powerSupplyService: PowerSupplyService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.powerSupplies = this.powerSupplyService.getPowerSupplies();
    }

    storePowerSupply(): void {
        this.dataStorageService.storePowerSupplies();
    }

    loadPowerSupply(): void {
        this.dataStorageService.fetchPowerSupplies();
    }
}
