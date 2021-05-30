import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Storage } from './storage.model';

@Injectable({ providedIn: 'root' })
export class StoragesResolverService implements Resolve<Storage[]> {
    constructor(private dataStorageService: DataStorageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataStorageService.fetchStorages();
    }
}
