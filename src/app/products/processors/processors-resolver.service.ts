import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Processor } from './processor.model';
import { ProcessorService } from './processor.service';

@Injectable({ providedIn: 'root' })
export class ProcessorsResolverService implements Resolve<Processor[]> {
    constructor(
        private dataStorageService: DataStorageService,
        private processorService: ProcessorService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const processors = this.processorService.getProcessors();

        if (processors.length === 0) {
            return this.dataStorageService.fetchProcessors();
        } else {
            return processors;
        }
    }
}
