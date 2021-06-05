import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
3;

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Processor } from '../processor.model';
import { ProcessorService } from '../processor.service';

@Component({
    selector: 'app-processors-start',
    templateUrl: './processors-start.component.html',
    styleUrls: ['./processors-start.component.scss'],
})
export class ProcessorsStartComponent implements OnInit {
    // tslint:disable-next-line: no-non-null-assertion
    processors: Processor[] = null!;

    constructor(
        private processorService: ProcessorService,
        private dataStorageService: DataStorageService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.processors = this.processorService.getProcessors();
    }

    addProcessor(index: number): void {
        const processor = this.processorService.getProcessor(index);
        this.buildSystemService.addCPU(processor);
        this.router.navigate(['/build-system']);
    }

    storeProcessors(): void {
        // this.dataStorageService.storeProcessors();
    }

    loadProcessors(): void {
        this.dataStorageService.fetchProcessors();
    }
}
