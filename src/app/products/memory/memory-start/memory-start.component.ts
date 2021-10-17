import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Memory } from '../momery.model';
import { MemoryService } from '../memory.service';
import { BuildSystemService } from 'src/app/build-system/build-system.service';

@Component({
    selector: 'app-memory-start',
    templateUrl: './memory-start.component.html',
    styleUrls: ['./memory-start.component.scss'],
})
export class MemoryStartComponent implements OnInit {
    memory: Memory[] = null!;

    priceMin: number | undefined;
    priceMax: number | undefined;

    memorySize: number = 4;

    manufacturerCheckboxes: string[] = [];
    memoryTypeCheckboxes: string[] = [];
    memoryModuleCheckboxes: string[] = [];
    memorySpeedCheckboxes: string[] = [];
    formFactorCheckboxes: string[] = [];

    constructor(
        private memoryService: MemoryService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.memory = this.memoryService.getMemory();
    }

    addRAM(index: number): void {
        const ram = this.memoryService.getRAM(index);
        this.buildSystemService.addMemory(ram);
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

        this.memory = this.memoryService.applyAllFilters(
            this.manufacturerCheckboxes,
            this.memoryTypeCheckboxes,
            this.memoryModuleCheckboxes,
            this.memorySpeedCheckboxes,
            this.formFactorCheckboxes,
            activePriceMin,
            activePriceMax,
            this.memorySize
        );

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    // Compute checked filters
    checkboxClicked(event: any, name: string, type: string) {
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

        if (type === 'memoryType') {
            if (event.target.checked) {
                this.memoryTypeCheckboxes.push(name);
                console.log(this.memoryTypeCheckboxes);
            } else {
                this.memoryTypeCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.memoryTypeCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'memoryModule') {
            if (event.target.checked) {
                this.memoryModuleCheckboxes.push(name);
            } else {
                this.memoryModuleCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.memoryModuleCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'memorySpeed') {
            if (event.target.checked) {
                this.memorySpeedCheckboxes.push(name);
            } else {
                this.memorySpeedCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.memorySpeedCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'formFactor') {
            if (event.target.checked) {
                this.formFactorCheckboxes.push(name);
            } else {
                this.formFactorCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.formFactorCheckboxes.splice(index, 1);
                });
            }
        }
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
