import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Cabinate } from './cabinate.model';

@Injectable({ providedIn: 'root' })
export class CabinateService {
    cabinatesChanged = new Subject<Cabinate[]>();
    activeCabinatesChanged = new Subject<Cabinate[]>();

    private cabinates: Cabinate[] = [];
    private activeCabinates: Cabinate[] = [];
    private manufacturerNames: string[] = [];

    constructor() {}

    setCabinates(cabinates: Cabinate[]): void {
        this.cabinates = cabinates;
        this.activeCabinates = cabinates.sort((a, b) => a.price - b.price);

        this.setManufacturerNames();

        this.cabinatesChanged.next(this.cabinates.slice());
        this.activeCabinatesChanged.next(this.activeCabinates.slice());
    }

    getCabinates(): Cabinate[] {
        return this.cabinates.slice();
    }

    setManufacturerNames() {
        this.cabinates.forEach((cabinate) => {
            this.manufacturerNames.push(cabinate.manufacturer);
        });

        this.manufacturerNames = this.removeDuplicates(this.manufacturerNames);
        this.manufacturerNames = this.manufacturerNames.sort();
    }

    getManufacturerNames(): string[] {
        return this.manufacturerNames.slice();
    }

    removeDuplicates(data: string[]) {
        return [...new Set(data)];
    }

    getCabinate(index: number): Cabinate {
        return this.activeCabinates[index];
    }

    applyAllFilters(
        manufacturerCheckboxes: string[],
        typeCheckboxes: string[],
        sidePanelWindowCheckboxes: string[],
        priceMin: number,
        priceMax: number,
        PSULength: number,
        GPULength: number,
        CPUCoolerClearance: number
    ): Cabinate[] {
        this.activeCabinates = this.applyPriceFilter(priceMin, priceMax);

        this.activeCabinates = this.applyPSULengthFilter(PSULength);

        this.activeCabinates = this.applyGPULengthFilter(GPULength);

        this.activeCabinates =
            this.applyCPUCoolerClearanceFilter(CPUCoolerClearance);

        this.activeCabinates = this.applyManufacturerFilter(
            manufacturerCheckboxes
        );

        this.activeCabinates = this.applyTypeFilter(typeCheckboxes);

        this.activeCabinates = this.applySidePanelWindowFilter(
            sidePanelWindowCheckboxes
        );

        return this.activeCabinates.slice();
    }

    applyPriceFilter(priceMin: number, priceMax: number): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        this.cabinates.forEach((cabinate) => {
            if (cabinate.price >= priceMin && cabinate.price <= priceMax)
                newCabinatesArray.push(cabinate);
        });
        return newCabinatesArray;
    }

    applyPSULengthFilter(PSULength: number): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        this.activeCabinates.forEach((cabinate) => {
            if (cabinate.maxPSULength >= PSULength)
                newCabinatesArray.push(cabinate);
        });
        return newCabinatesArray;
    }

    applyGPULengthFilter(GPULength: number): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        this.activeCabinates.forEach((cabinate) => {
            if (cabinate.maxGPULength >= GPULength)
                newCabinatesArray.push(cabinate);
        });
        return newCabinatesArray;
    }

    applyCPUCoolerClearanceFilter(CPUCoolerClearance: number): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        this.activeCabinates.forEach((cabinate) => {
            if (cabinate.maxCPUClearance >= CPUCoolerClearance)
                newCabinatesArray.push(cabinate);
        });
        return newCabinatesArray;
    }

    applyManufacturerFilter(manufacturerCheckboxes: string[]): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        if (manufacturerCheckboxes.length === 0) {
            return this.activeCabinates;
        } else {
            this.activeCabinates.forEach((cabinate) => {
                manufacturerCheckboxes.forEach((manufacturer) => {
                    if (cabinate.manufacturer === manufacturer)
                        newCabinatesArray.push(cabinate);
                });
            });
            return newCabinatesArray;
        }
    }

    applyTypeFilter(typeCheckboxes: string[]): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        if (typeCheckboxes.length === 0) {
            return this.activeCabinates;
        } else {
            this.activeCabinates.forEach((cabinate) => {
                typeCheckboxes.forEach((type) => {
                    if (cabinate.type === type)
                        newCabinatesArray.push(cabinate);
                });
            });
            return newCabinatesArray;
        }
    }

    applySidePanelWindowFilter(
        sidePanelWindowCheckboxes: string[]
    ): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        if (sidePanelWindowCheckboxes.length === 0) {
            return this.activeCabinates;
        } else {
            this.activeCabinates.forEach((cabinate) => {
                sidePanelWindowCheckboxes.forEach((sidePanelWindow) => {
                    if (cabinate.sidePanel === sidePanelWindow)
                        newCabinatesArray.push(cabinate);
                });
            });
            return newCabinatesArray;
        }
    }
}
