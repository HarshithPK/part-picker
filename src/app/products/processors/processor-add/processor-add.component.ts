import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Processor } from '../processor.model';
import { ProcessorService } from '../processor.service';

@Component({
    selector: 'app-processor-add',
    templateUrl: './processor-add.component.html',
    styleUrls: ['./processor-add.component.scss'],
})
export class ProcessorAddComponent implements OnInit {
    private processors: Processor[] = [];
    private processor!: Processor;

    constructor(
        private processorService: ProcessorService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.processors = this.processorService.getProcessors();
    }

    onSubmit(form: NgForm) {
        this.processor = new Processor(
            form.value.manufacturer,
            form.value.series,
            form.value.name,
            form.value.cores,
            form.value.threads,
            form.value.socket,
            form.value.baseClock,
            form.value.boostClock,
            form.value.tdp,
            form.value.integratedGraphics,
            form.value.smt,
            form.value.architecture,
            form.value.cache,
            form.value.lithograaphy,
            form.value.imagePath,
            form.value.price
        );

        this.processors.push(this.processor);
        this.dataStorageService.storeProcessors(this.processors);

        form.reset();
    }
}
