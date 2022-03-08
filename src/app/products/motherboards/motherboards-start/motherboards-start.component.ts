import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { Motherboard } from '../motherboard.model';
import { MotherboardService } from '../motherboard.service';

@Component({
    selector: 'app-motherboards-start',
    templateUrl: './motherboards-start.component.html',
    styleUrls: ['./motherboards-start.component.scss'],
})
export class MotherboardsStartComponent implements OnInit {
    motherboards: Motherboard[] = null!;

    priceMin: number | undefined;
    priceMax: number | undefined;

    manufacturerNames: string[] = [];

    maxMemorySuopport: number = 32;

    manufacturerCheckboxes: string[] = [];
    formFactorCheckboxes: string[] = [];
    chipsetCheckboxes: string[] = [];
    socketCheckboxes: string[] = [];
    multiGPUSupportCheckboxes: string[] = [];
    wirelessNetworkingCheckboxes: string[] = [];
    memoryTypeCheckboxes: string[] = [];

    constructor(
        private motherboardService: MotherboardService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.motherboards = this.motherboardService.getMotherboards();
        this.manufacturerNames = this.motherboardService.getManufacturerNames();
        console.log(this.manufacturerNames);
    }

    addMotherboard(index: number): void {
        const motherboard = this.motherboardService.getMotherboard(index);
        this.buildSystemService.addMotherboard(motherboard);
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

        this.motherboards = this.motherboardService.applyAllFilters(
            this.manufacturerCheckboxes,
            this.formFactorCheckboxes,
            this.chipsetCheckboxes,
            this.socketCheckboxes,
            this.multiGPUSupportCheckboxes,
            this.wirelessNetworkingCheckboxes,
            this.memoryTypeCheckboxes,
            activePriceMin,
            activePriceMax,
            this.maxMemorySuopport
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

            case 'formFactor':
                console.log('formFactor');
                if (event.target.checked) {
                    this.formFactorCheckboxes.push(name);
                } else {
                    this.formFactorCheckboxes.forEach((element, index) => {
                        if (element === name)
                            this.formFactorCheckboxes.splice(index, 1);
                    });
                }
                break;

            case 'chipset':
                console.log('chipset');
                if (event.target.checked) {
                    this.chipsetCheckboxes.push(name);
                } else {
                    this.chipsetCheckboxes.forEach((element, index) => {
                        if (element === name)
                            this.chipsetCheckboxes.splice(index, 1);
                    });
                }
                break;

            case 'socket':
                console.log('socket');
                if (event.target.checked) {
                    this.socketCheckboxes.push(name);
                } else {
                    this.socketCheckboxes.forEach((element, index) => {
                        if (element === name)
                            this.socketCheckboxes.splice(index, 1);
                    });
                }
                break;

            case 'multiGPUSupport':
                console.log('multiGPUSupport');
                if (event.target.checked) {
                    this.multiGPUSupportCheckboxes.push(name);
                } else {
                    this.multiGPUSupportCheckboxes.forEach((element, index) => {
                        if (element === name)
                            this.multiGPUSupportCheckboxes.splice(index, 1);
                    });
                }
                break;

            case 'wireless':
                console.log('wireless');
                if (event.target.checked) {
                    this.wirelessNetworkingCheckboxes.push(name);
                } else {
                    this.wirelessNetworkingCheckboxes.forEach(
                        (element, index) => {
                            if (element === name)
                                this.wirelessNetworkingCheckboxes.splice(
                                    index,
                                    1
                                );
                        }
                    );
                }
                break;

            case 'memoryType':
                console.log('memoryType');
                if (event.target.checked) {
                    this.memoryTypeCheckboxes.push(name);
                } else {
                    this.memoryTypeCheckboxes.forEach((element, index) => {
                        if (element === name)
                            this.memoryTypeCheckboxes.splice(index, 1);
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

        if (type === 'chipset') {
            if (event.target.checked) {
                this.chipsetCheckboxes.push(name);
            } else {
                this.chipsetCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.chipsetCheckboxes.splice(index, 1);
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

        if (type === 'multiGPUSupport') {
            if (event.target.checked) {
                this.multiGPUSupportCheckboxes.push(name);
            } else {
                this.multiGPUSupportCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.multiGPUSupportCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'wireless') {
            if (event.target.checked) {
                this.wirelessNetworkingCheckboxes.push(name);
            } else {
                this.wirelessNetworkingCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.wirelessNetworkingCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'memoryType') {
            if (event.target.checked) {
                this.memoryTypeCheckboxes.push(name);
            } else {
                this.memoryTypeCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.memoryTypeCheckboxes.splice(index, 1);
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
