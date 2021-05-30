import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { PowerSupply } from './power-supply.model';

@Injectable({ providedIn: 'root' })
export class PowerSuppliesResolverService implements Resolve<PowerSupply[]> {
    constructor(private dataStorageService: DataStorageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataStorageService.fetchPowerSupplies();
    }
}
