import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
3;

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { Processor } from '../processor.model';
import { ProcessorService } from '../processor.service';

@Component({
    selector: 'app-processors-start',
    templateUrl: './processors-start.component.html',
    styleUrls: ['./processors-start.component.scss'],
})
export class ProcessorsStartComponent implements OnInit {
    processors: Processor[] = null!;

    priceMin: number | undefined;
    priceMax: number | undefined;

    noOfCores: number = 2;
    noOfThreads: number = 2;
    processorTDP: number = 15;
    processorCache: number = 6;

    manufacturerCheckboxes: string[] = [];
    seriesCheckboxes: string[] = [];
    socketCheckboxes: string[] = [];

    constructor(
        private processorService: ProcessorService,
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

    //Apply selected filters
    applyFilters() {
        let activePriceMin: number = 0;
        let activePriceMax: number = 1000000;

        if (this.priceMin) {
            activePriceMin = this.priceMin;
        }

        if (this.priceMax) {
            activePriceMax = this.priceMax;
        }

        this.processors = this.processorService.applyAllFilters(
            this.manufacturerCheckboxes,
            this.seriesCheckboxes,
            this.socketCheckboxes,
            activePriceMin,
            activePriceMax,
            this.noOfCores,
            this.noOfThreads,
            this.processorTDP,
            this.processorCache
        );

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    // Compute checked filters
    checkboxClicked(event: any, name: string, type: string) {
        //Switch case for the filters.
        switch (type) {
            case 'manufacturer':
                console.log('manufacturer');
                if (event.target.checked) {
                    this.manufacturerCheckboxes.push(name);
                } else {
                    this.manufacturerCheckboxes.forEach((element, index) => {
                        if (element === name)
                            this.manufacturerCheckboxes.splice(index, 1);
                    });
                }
                break;

            case 'series':
                console.log('series');
                if (event.target.checked) {
                    this.seriesCheckboxes.push(name);
                } else {
                    this.seriesCheckboxes.forEach((element, index) => {
                        if (element === name)
                            this.seriesCheckboxes.splice(index, 1);
                    });
                }
                break;

            case 'socket':
                console.log('socket');
                if (event.target.checked) {
                    this.socketCheckboxes.push(name);
                } else {
                    this.socketCheckboxes.forEach((element, index) => {
                        if (element === name) {
                            this.socketCheckboxes.splice(index, 1);
                        }
                    });
                }
                break;
        }

        /*
        if (type === 'manufacturer') {
            if (event.target.checked) {
                this.manufacturerCheckboxes.push(name);
            } else {
                this.manufacturerCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.manufacturerCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'series') {
            if (event.target.checked) {
                this.seriesCheckboxes.push(name);
            } else {
                this.seriesCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.seriesCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'socket') {
            if (event.target.checked) {
                this.socketCheckboxes.push(name);
            } else {
                this.socketCheckboxes.forEach((element, index) => {
                    if (element === name) {
                        this.socketCheckboxes.splice(index, 1);
                    }
                });
            }
        }
        */
    }

    //Clear all filters
    clearFilters() {
        let currentUrl = this.router.url;
        this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
                this.router.navigate([currentUrl]);
            });
    }
}
