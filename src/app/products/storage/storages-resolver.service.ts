import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Storage } from './storage.model';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class StoragesResolverService implements Resolve<Storage[]> {
    constructor(
        private dataStorageService: DataStorageService,
        private storageService: StorageService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const storages = this.storageService.getStorages();

        if (storages.length === 0) {
            return this.dataStorageService.fetchStorages();
        } else {
            return storages;
        }
    }
}
