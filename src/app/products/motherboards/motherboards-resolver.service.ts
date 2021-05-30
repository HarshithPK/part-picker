import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Motherboard } from './motherboard.model';
import { MotherboardService } from './motherboard.service';

@Injectable({ providedIn: 'root' })
export class MotherboardsResolverService implements Resolve<Motherboard[]> {
    constructor(
        private dataStorageService: DataStorageService,
        private motherboardService: MotherboardService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const motherboards = this.motherboardService.getMotherboards();

        if (motherboards.length === 0) {
            return this.dataStorageService.fetchMotherboards();
        } else {
            return motherboards;
        }
    }
}
