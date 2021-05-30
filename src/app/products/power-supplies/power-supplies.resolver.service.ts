import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { PowerSupply } from './power-supply.model';
import { PowerSupplyService } from './power-supply.service';

@Injectable({ providedIn: 'root' })
export class PowerSuppliesResolverService implements Resolve<PowerSupply[]> {
    constructor(
        private dataStorageService: DataStorageService,
        private powerSupplyService: PowerSupplyService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const powerSupplies = this.powerSupplyService.getPowerSupplies();

        if (powerSupplies.length === 0) {
            return this.dataStorageService.fetchPowerSupplies();
        } else {
            return powerSupplies;
        }
    }
}
