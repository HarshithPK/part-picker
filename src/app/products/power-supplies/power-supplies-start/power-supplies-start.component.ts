import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { PowerSupply } from '../power-supply.model';
import { PowerSupplyService } from '../power-supply.service';

@Component({
    selector: 'app-power-supplies-start',
    templateUrl: './power-supplies-start.component.html',
    styleUrls: ['./power-supplies-start.component.scss'],
})
export class PowerSuppliesStartComponent implements OnInit {
    powerSupplies: PowerSupply[] = null!;

    priceMin: number | undefined;
    priceMax: number | undefined;
    wattageMin: number | undefined;
    wattageMax: number | undefined;

    manufacturerNames: string[] = [];

    manufacturerCheckboxes: string[] = [];
    formFactorCheckboxes: string[] = [];
    modularCheckboxes: string[] = [];
    efficiencyRatingCheckboxes: string[] = [];

    constructor(
        private powerSupplyService: PowerSupplyService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.powerSupplies = this.powerSupplyService.getPowerSupplies();

        this.manufacturerNames = this.powerSupplyService.getManufacturerNames();

        console.log(this.manufacturerNames);
    }

    addPowerSupply(index: number): void {
        const powerSupply = this.powerSupplyService.getPowerSupply(index);
        this.buildSystemService.addPowerSupply(powerSupply);
        this.router.navigate(['/build-system']);
    }

    //Apply selected filters
    applyFilters() {
        let activePriceMin: number = 0;
        let activePriceMax: number = 100000;
        let activeWattageMin: number = 0;
        let activeWattageMax: number = 2000;

        if (this.priceMin) {
            activePriceMin = this.priceMin;
        }

        if (this.priceMax) {
            activePriceMax = this.priceMax;
        }

        if (this.wattageMin) {
            activeWattageMin = this.wattageMin;
        }

        if (this.wattageMax) {
            activeWattageMax = this.wattageMax;
        }

        this.powerSupplies = this.powerSupplyService.applyAllFilters(
            this.manufacturerCheckboxes,
            this.formFactorCheckboxes,
            this.modularCheckboxes,
            this.efficiencyRatingCheckboxes,
            activePriceMin,
            activePriceMax,
            activeWattageMin,
            activeWattageMax
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

            case 'modularity':
                console.log('modularity');
                if (event.target.checked) {
                    this.modularCheckboxes.push(name);
                } else {
                    this.modularCheckboxes.forEach((element, index) => {
                        if (element === name)
                            this.modularCheckboxes.splice(index, 1);
                    });
                }
                break;

            case 'efficiency':
                console.log('efficiency');
                if (event.target.checked) {
                    this.efficiencyRatingCheckboxes.push(name);
                } else {
                    this.efficiencyRatingCheckboxes.forEach(
                        (element, index) => {
                            if (element === name)
                                this.efficiencyRatingCheckboxes.splice(
                                    index,
                                    1
                                );
                        }
                    );
                }
                break;
        }

        /*
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

        if (type === 'modularity') {
            if (event.target.checked) {
                this.modularCheckboxes.push(name);
            } else {
                this.modularCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.modularCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'efficiency') {
            if (event.target.checked) {
                this.efficiencyRatingCheckboxes.push(name);
            } else {
                this.efficiencyRatingCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.efficiencyRatingCheckboxes.splice(index, 1);
                });
            }
        }
        */
    }

    //Clear all filters
    clearFilters() {
        this.manufacturerCheckboxes = [];
        this.formFactorCheckboxes = [];
        this.modularCheckboxes = [];
        this.efficiencyRatingCheckboxes = [];

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
