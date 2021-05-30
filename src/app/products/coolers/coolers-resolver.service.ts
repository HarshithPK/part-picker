import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Cooler } from './cooler.model';
import { CoolerService } from './cooler.service';

@Injectable({ providedIn: 'root' })
export class CoolersResolcerService implements Resolve<Cooler[]> {
    constructor(
        private dataStorageService: DataStorageService,
        private coolerService: CoolerService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const coolers = this.coolerService.getCoolers();

        if (coolers.length === 0) {
            return this.dataStorageService.fetchCoolers();
        } else {
            return coolers;
        }
    }
}
