import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { MemoryService } from './memory.service';
import { Memory } from './momery.model';

@Injectable({ providedIn: 'root' })
export class MemoryResolverService implements Resolve<Memory[]> {
    constructor(
        private dataStorageService: DataStorageService,
        private memoryService: MemoryService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const memory = this.memoryService.getMemory();

        if (memory.length === 0) {
            return this.dataStorageService.fetchMemory();
        } else {
            return memory;
        }
    }
}
