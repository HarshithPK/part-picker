import { Component, OnInit } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Processor } from '../processor.model';
import { ProcessorService } from '../processor.service';

@Component({
    selector: 'app-processors-start',
    templateUrl: './processors-start.component.html',
    styleUrls: ['./processors-start.component.scss'],
})
export class ProcessorsStartComponent implements OnInit {
    processors: Processor[] = null!;

    constructor(
        private processorService: ProcessorService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.processors = this.processorService.getProcessors();
    }

    storeProcessors(): void {
        this.dataStorageService.storeProcessors();
    }

    loadProcessors(): void {
        this.dataStorageService.fetchProcessors();
    }
}
