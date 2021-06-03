import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
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
        private dataStorageService: DataStorageService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.powerSupplies = this.powerSupplyService.getPowerSupplies();
    }

    addPowerSupply(index: number): void {
        const powerSupply = this.powerSupplyService.getPowerSupply(index);
        this.buildSystemService.addPowerSupply(powerSupply);
        this.router.navigate(['/build-system']);
    }

    storePowerSupply(): void {
        this.dataStorageService.storePowerSupplies();
    }

    loadPowerSupply(): void {
        this.dataStorageService.fetchPowerSupplies();
    }
}
