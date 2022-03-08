import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { Cooler } from '../cooler.model';
import { CoolerService } from '../cooler.service';

@Component({
    selector: 'app-coolers-start',
    templateUrl: './coolers-start.component.html',
    styleUrls: ['./coolers-start.component.scss'],
})
export class CoolersStartComponent implements OnInit {
    coolers: Cooler[] = null!;

    priceMin: number | undefined;
    priceMax: number | undefined;

    manufacturerNames: string[] = [];

    coolerHeightWithoutFan: number = 25;
    coolerHeightWithFan: number = 25;

    manufacturerCheckboxes: string[] = [];
    socketCheckboxes: string[] = [];

    constructor(
        private coolerService: CoolerService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.coolers = this.coolerService.getCoolers();
        this.manufacturerNames = this.coolerService.getManufacturerNames();
        console.log(this.manufacturerNames);
    }

    addCooler(index: number): void {
        const cooler = this.coolerService.getCooler(index);
        this.buildSystemService.addCooler(cooler);
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

        this.coolers = this.coolerService.applyAllFilters(
            this.manufacturerCheckboxes,
            this.socketCheckboxes,
            activePriceMin,
            activePriceMax,
            this.coolerHeightWithoutFan,
            this.coolerHeightWithFan
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

            case 'socket':
                console.log('socket');
                if (event.target.checked) {
                    this.manufacturerCheckboxes.push(name);
                } else {
                    this.manufacturerCheckboxes.forEach((element, index) => {
                        if (element === name)
                            this.manufacturerCheckboxes.splice(index, 1);
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

        if (type === 'socket') {
            if (event.target.checked) {
                this.socketCheckboxes.push(name);
            } else {
                this.socketCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.socketCheckboxes.splice(index, 1);
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
