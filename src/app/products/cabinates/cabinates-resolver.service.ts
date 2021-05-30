import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Cabinate } from './cabinate.model';
import { CabinateService } from './cabinate.service';

@Injectable({ providedIn: 'root' })
export class CabinatesResolverService implements Resolve<Cabinate[]> {
    constructor(
        private dataStorageService: DataStorageService,
        private cabinateService: CabinateService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const cabinates = this.cabinateService.getCabinates();

        if (cabinates.length === 0) {
            return this.dataStorageService.fetchCabinates();
        } else {
            return cabinates;
        }
    }
}
