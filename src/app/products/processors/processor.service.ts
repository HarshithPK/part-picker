import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Processor } from './processor.model';

@Injectable({ providedIn: 'root' })
export class ProcessorService {
    private processorsChanged = new Subject<Processor[]>();
    private activeProcessorsChanged = new Subject<Processor[]>();

    private processors: Processor[] = [];
    private activeProcessors: Processor[] = [];

    constructor() {}

    setProcessors(processors: Processor[]) {
        this.processors = processors;
        this.activeProcessors = processors.sort((a, b) => a.price - b.price);

        this.processorsChanged.next(this.processors.slice());
        this.activeProcessorsChanged.next(this.activeProcessors.slice());
    }

    getProcessors(): Processor[] {
        return this.processors.slice();
    }

    getProcessor(index: number): Processor {
        return this.activeProcessors[index];
    }

    applyAllFilters(
        manufacturerCheckboxes: string[],
        seriesCheckboxes: string[],
        socketCheckboxes: string[],
        priceMin: number,
        priceMax: number,
        noOfCores: number,
        noOfThreads: number,
        processorTDP: number,
        processorCache: number
    ): Processor[] {
        this.activeProcessors = this.applyPriceFilter(priceMin, priceMax);

        this.activeProcessors = this.applyCoresFilter(noOfCores);

        this.activeProcessors = this.applyThreadsFilter(noOfThreads);

        this.activeProcessors = this.applyTDPFilter(processorTDP);

        this.activeProcessors = this.applyCacheFilter(processorCache);

        this.activeProcessors = this.applyManufacturerFilter(
            manufacturerCheckboxes
        );

        this.activeProcessors = this.applySeriesFilter(seriesCheckboxes);

        this.activeProcessors = this.applySocketFilter(socketCheckboxes);

        return this.activeProcessors.slice();
    }

    applyPriceFilter(priceMin: number, priceMax: number): Processor[] {
        let newProcessorsArray: Processor[] = [];

        this.processors.forEach((processor) => {
            if (processor.price >= priceMin && processor.price <= priceMax)
                newProcessorsArray.push(processor);
        });

        return newProcessorsArray;
    }

    applyCoresFilter(noOfCores: number): Processor[] {
        let newProcessorsArray: Processor[] = [];

        this.activeProcessors.forEach((processor) => {
            if (processor.cores >= noOfCores)
                newProcessorsArray.push(processor);
        });

        return newProcessorsArray;
    }

    applyTDPFilter(processorTDP: number): Processor[] {
        let newProcessorsArray: Processor[] = [];

        this.activeProcessors.forEach((processor) => {
            if (processor.tdp >= processorTDP)
                newProcessorsArray.push(processor);
        });

        return newProcessorsArray;
    }

    applyCacheFilter(processorCache: number): Processor[] {
        let newProcessorsArray: Processor[] = [];

        this.activeProcessors.forEach((processor) => {
            if (processor.cache >= processorCache)
                newProcessorsArray.push(processor);
        });

        return newProcessorsArray;
    }

    applyThreadsFilter(noOfThreads: number): Processor[] {
        let newProcessorsArray: Processor[] = [];

        this.activeProcessors.forEach((processor) => {
            if (processor.threads >= noOfThreads)
                newProcessorsArray.push(processor);
        });

        return newProcessorsArray;
    }

    applyManufacturerFilter(manufacturerCheckboxes: string[]): Processor[] {
        let newProcessorsArray: Processor[] = [];

        if (manufacturerCheckboxes.length === 0) {
            return this.activeProcessors;
        } else {
            this.activeProcessors.forEach((processor) => {
                manufacturerCheckboxes.forEach((manufacturer) => {
                    if (processor.manufacturer === manufacturer)
                        newProcessorsArray.push(processor);
                });
            });
            return newProcessorsArray;
        }
    }

    applySeriesFilter(seriesCheckboxes: string[]): Processor[] {
        let newProcessorsArray: Processor[] = [];

        if (seriesCheckboxes.length === 0) {
            return this.activeProcessors;
        } else {
            this.activeProcessors.forEach((processor) => {
                seriesCheckboxes.forEach((series) => {
                    if (processor.series === series)
                        newProcessorsArray.push(processor);
                });
            });
            return newProcessorsArray;
        }
    }

    applySocketFilter(socketCheckboxes: string[]): Processor[] {
        let newProcessorsArray: Processor[] = [];

        if (socketCheckboxes.length === 0) {
            return this.activeProcessors;
        } else {
            this.activeProcessors.forEach((processor) => {
                socketCheckboxes.forEach((socket) => {
                    if (processor.socket === socket)
                        newProcessorsArray.push(processor);
                });
            });
            return newProcessorsArray;
        }
    }
}
