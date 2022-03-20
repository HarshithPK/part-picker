import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { Cabinate } from '../cabinate.model';
import { CabinateService } from '../cabinate.service';

@Component({
    selector: 'app-cabinates-start',
    templateUrl: './cabinates-start.component.html',
    styleUrls: ['./cabinates-start.component.scss'],
})
export class CabinatesStartComponent implements OnInit {
    cabinates: Cabinate[] = null!;

    private coolerSelectedHeight: number = null!;
    private gpuSelectedLength: number = null!;
    private powerSupplySelectedLength: number = null!;

    priceMin: number | undefined;
    priceMax: number | undefined;

    manufacturerNames: string[] = [];

    manufacturerCheckboxes: string[] = [];
    typeCheckboxes: string[] = [];
    sidePanelWindowCheckboxes: string[] = [];

    PSULength: number = 50;
    GPULength: number = 50;
    CPUCoolerClearance: number = 10;

    constructor(
        private cabinateService: CabinateService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        // this.cabinates = this.cabinateService.getCabinates();
        this.coolerSelectedHeight =
            this.buildSystemService.coolerSelectedHeight;
        if (this.coolerSelectedHeight) {
            this.CPUCoolerClearance = this.coolerSelectedHeight;
        }

        this.gpuSelectedLength = this.buildSystemService.gpuSelectedLength;
        if (this.gpuSelectedLength) {
            this.GPULength = this.gpuSelectedLength;
        }

        this.powerSupplySelectedLength =
            this.buildSystemService.powerSupplySelectedLength;
        if (this.powerSupplySelectedLength) {
            this.PSULength = this.powerSupplySelectedLength;
        }

        this.applyFilters();

        this.manufacturerNames = this.cabinateService.getManufacturerNames();
    }

    addCabinate(index: number): void {
        const cabinate = this.cabinateService.getCabinate(index);
        this.buildSystemService.addCabinate(cabinate);
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

        this.cabinates = this.cabinateService.applyAllFilters(
            this.manufacturerCheckboxes,
            this.typeCheckboxes,
            this.sidePanelWindowCheckboxes,
            activePriceMin,
            activePriceMax,
            this.PSULength,
            this.GPULength,
            this.CPUCoolerClearance
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

            case 'type':
                console.log('type');
                if (event.target.checked) {
                    this.typeCheckboxes.push(name);
                } else {
                    this.typeCheckboxes.forEach((element, index) => {
                        if (element === name)
                            this.typeCheckboxes.splice(index, 1);
                    });
                }
                break;

            case 'sidePanelWindow':
                console.log('sidePanelWindow');
                if (event.target.checked) {
                    this.sidePanelWindowCheckboxes.push(name);
                } else {
                    this.sidePanelWindowCheckboxes.forEach((element, index) => {
                        if (element === name)
                            this.sidePanelWindowCheckboxes.splice(index, 1);
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

        if (type === 'type') {
            if (event.target.checked) {
                this.typeCheckboxes.push(name);
            } else {
                this.typeCheckboxes.forEach((element, index) => {
                    if (element === name) this.typeCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'sidePanelWindow') {
            if (event.target.checked) {
                this.sidePanelWindowCheckboxes.push(name);
            } else {
                this.sidePanelWindowCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.sidePanelWindowCheckboxes.splice(index, 1);
                });
            }
        }*/
    }

    //Clear all filters
    clearFilters() {
        this.manufacturerNames = [];

        this.manufacturerCheckboxes = [];
        this.typeCheckboxes = [];
        this.sidePanelWindowCheckboxes = [];

        this.PSULength = 50;
        this.GPULength = 50;
        this.CPUCoolerClearance = 10;

        this.applyFilters();

        /*
        let currentUrl = this.router.url;
        this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
                this.router.navigate([currentUrl]);
            });
        */
    }
}
