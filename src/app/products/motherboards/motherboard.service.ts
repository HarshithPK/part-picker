import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Motherboard } from './motherboard.model';

@Injectable({ providedIn: 'root' })
export class MotherboardService {
    motherboardsChanged = new Subject<Motherboard[]>();
    activeMotherboardsChanged = new Subject<Motherboard[]>();

    private motherboards: Motherboard[] = [];
    private activeMotherboards: Motherboard[] = [];
    private manufacturerNames: string[] = [];

    constructor() {}

    setMotherboards(motherboards: Motherboard[]) {
        this.motherboards = motherboards;
        this.activeMotherboards = motherboards.sort(
            (a, b) => a.price - b.price
        );

        this.setManufacturerNames();

        this.motherboardsChanged.next(this.motherboards.slice());
        this.activeMotherboardsChanged.next(this.activeMotherboards.slice());
    }

    getMotherboards(): Motherboard[] {
        return this.motherboards.slice();
    }

    // getActiveMotherboards(socketCheckboxes: string[]): Motherboard[] {
    //     this.activeMotherboards = this.applySocketFilter(socketCheckboxes);
    //     return this.activeMotherboards.slice();
    // }

    setManufacturerNames() {
        this.motherboards.forEach((motherboard) => {
            this.manufacturerNames.push(motherboard.manufacturer);
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

    getMotherboard(index: number): Motherboard {
        return this.activeMotherboards[index];
    }

    applyAllFilters(
        manufacturerCheckboxes: string[],
        formFactorCheckboxes: string[],
        chipsetCheckboxes: string[],
        socketCheckboxes: string[],
        multiGPUSupportCheckboxes: string[],
        wirelessNetworkingCheckboxes: string[],
        memoryTypeCheckboxes: string[],
        priceMin: number,
        priceMax: number,
        maxMemorySuopport: number
    ): Motherboard[] {
        this.activeMotherboards = this.applyPriceFilter(priceMin, priceMax);

        this.activeMotherboards =
            this.applyMaxMemorySupportFilter(maxMemorySuopport);

        this.activeMotherboards = this.applyManufacturerFilter(
            manufacturerCheckboxes
        );

        this.activeMotherboards =
            this.applyFormFactorFilter(formFactorCheckboxes);

        this.activeMotherboards = this.applyChipsetFilter(chipsetCheckboxes);

        this.activeMotherboards = this.applySocketFilter(socketCheckboxes);

        this.activeMotherboards = this.applyMultiGPUSupportFilter(
            multiGPUSupportCheckboxes
        );

        this.activeMotherboards = this.applyWirelessNetworkingFilter(
            wirelessNetworkingCheckboxes
        );

        this.activeMotherboards =
            this.applyMemoryTypeFilter(memoryTypeCheckboxes);

        return this.activeMotherboards.slice();
    }

    applyPriceFilter(priceMin: number, priceMax: number): Motherboard[] {
        let newMotherboardsArray: Motherboard[] = [];

        this.motherboards.forEach((motherboard) => {
            if (motherboard.price >= priceMin && motherboard.price <= priceMax)
                newMotherboardsArray.push(motherboard);
        });

        return newMotherboardsArray;
    }

    applyMaxMemorySupportFilter(maxMemorySuopport: number) {
        let newMotherboardsArray: Motherboard[] = [];

        this.activeMotherboards.forEach((motherboard) => {
            if (motherboard.maxMemorySupport >= maxMemorySuopport)
                newMotherboardsArray.push(motherboard);
        });

        return newMotherboardsArray;
    }

    applyManufacturerFilter(manufacturerCheckboxes: string[]): Motherboard[] {
        let newMotherboardsArray: Motherboard[] = [];

        if (manufacturerCheckboxes.length === 0) {
            return this.activeMotherboards;
        } else {
            this.activeMotherboards.forEach((motherboard) => {
                manufacturerCheckboxes.forEach((manufacturer) => {
                    if (motherboard.manufacturer === manufacturer)
                        newMotherboardsArray.push(motherboard);
                });
            });
            return newMotherboardsArray;
        }
    }

    applyFormFactorFilter(formFactorCheckboxes: string[]): Motherboard[] {
        let newMotherboardsArray: Motherboard[] = [];

        if (formFactorCheckboxes.length === 0) {
            return this.activeMotherboards;
        } else {
            this.activeMotherboards.forEach((motherboard) => {
                formFactorCheckboxes.forEach((formFactor) => {
                    if (motherboard.formFactor === formFactor)
                        newMotherboardsArray.push(motherboard);
                });
            });
            return newMotherboardsArray;
        }
    }

    applyChipsetFilter(chipsetCheckboxes: string[]): Motherboard[] {
        let newMotherboardsArray: Motherboard[] = [];

        if (chipsetCheckboxes.length === 0) {
            return this.activeMotherboards;
        } else {
            this.activeMotherboards.forEach((motherboard) => {
                chipsetCheckboxes.forEach((chipset) => {
                    if (motherboard.chipset === chipset)
                        newMotherboardsArray.push(motherboard);
                });
            });
            return newMotherboardsArray;
        }
    }

    applySocketFilter(socketCheckboxes: string[]): Motherboard[] {
        let newMotherboardsArray: Motherboard[] = [];

        if (socketCheckboxes.length === 0) {
            return this.activeMotherboards;
        } else {
            socketCheckboxes = this.removeDuplicates(socketCheckboxes);
            console.log(socketCheckboxes);
            this.activeMotherboards.forEach((motherboard) => {
                socketCheckboxes.forEach((socket) => {
                    if (motherboard.socket === socket)
                        newMotherboardsArray.push(motherboard);
                });
            });
            return newMotherboardsArray;
        }
    }

    applyMultiGPUSupportFilter(
        multiGPUSupportCheckboxes: string[]
    ): Motherboard[] {
        let newMotherboardsArray: Motherboard[] = [];

        if (multiGPUSupportCheckboxes.length === 0) {
            return this.activeMotherboards;
        } else {
            this.activeMotherboards.forEach((motherboard) => {
                multiGPUSupportCheckboxes.forEach((multiGPUSupport) => {
                    if (
                        motherboard.dualGpuSupport[0] === multiGPUSupport ||
                        motherboard.dualGpuSupport[1] === multiGPUSupport
                    )
                        newMotherboardsArray.push(motherboard);
                });
            });
            return newMotherboardsArray;
        }
    }

    applyWirelessNetworkingFilter(
        wirelessNetworkingCheckboxes: string[]
    ): Motherboard[] {
        let newMotherboardsArray: Motherboard[] = [];

        if (wirelessNetworkingCheckboxes.length === 0) {
            return this.activeMotherboards;
        } else {
            this.activeMotherboards.forEach((motherboard) => {
                wirelessNetworkingCheckboxes.forEach((wirelessSupport) => {
                    if (motherboard.wirelessSupport === wirelessSupport)
                        newMotherboardsArray.push(motherboard);
                });
            });
            return newMotherboardsArray;
        }
    }

    applyMemoryTypeFilter(memoryTypeCheckboxes: string[]): Motherboard[] {
        let newMotherboardsArray: Motherboard[] = [];

        if (memoryTypeCheckboxes.length === 0) {
            return this.activeMotherboards;
        } else {
            this.activeMotherboards.forEach((motherboard) => {
                memoryTypeCheckboxes.forEach((memoryType) => {
                    if (motherboard.memoryType === memoryType)
                        newMotherboardsArray.push(motherboard);
                });
            });
            return newMotherboardsArray;
        }
    }
}
