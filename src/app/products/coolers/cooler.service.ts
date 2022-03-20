import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Cooler } from './cooler.model';

@Injectable({ providedIn: 'root' })
export class CoolerService {
    coolersChanged = new Subject<Cooler[]>();
    activeCoolersChanged = new Subject<Cooler[]>();

    private coolers: Cooler[] = [];
    private activeCoolers: Cooler[] = [];
    private manufacturerNames: string[] = [];

    constructor() {}

    setCoolers(coolers: Cooler[]) {
        this.coolers = coolers;
        this.activeCoolers = coolers.sort((a, b) => a.price - b.price);

        this.setManufacturerNames();

        this.coolersChanged.next(this.coolers.slice());
        this.activeCoolersChanged.next(this.activeCoolers.slice());
    }

    getCoolers(): Cooler[] {
        return this.coolers.slice();
    }

    getActiveCoolers(socketCheckboxes: string[]): Cooler[] {
        this.activeCoolers = this.applySocketFilter(socketCheckboxes);
        return this.activeCoolers.slice();
    }

    setManufacturerNames() {
        this.coolers.forEach((cooler) => {
            this.manufacturerNames.push(cooler.manufacturer);
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

    getCooler(index: number): Cooler {
        return this.activeCoolers[index];
    }

    applyAllFilters(
        manufacturerCheckboxes: string[],
        socketCheckboxes: string[],
        priceMin: number,
        priceMax: number,
        coolerHeightWithoutFan: number,
        coolerHeightWithFan: number
    ): Cooler[] {
        this.activeCoolers = this.applyPriceFilter(priceMin, priceMax);
        this.activeCoolers = this.applyHeightWithoutFanFilter(
            coolerHeightWithoutFan
        );
        this.activeCoolers = this.applyHeightWithFanFilter(coolerHeightWithFan);
        this.activeCoolers = this.applyManufacturerFilter(
            manufacturerCheckboxes
        );
        this.activeCoolers = this.applySocketFilter(socketCheckboxes);

        return this.activeCoolers.slice();
    }

    applyPriceFilter(priceMin: number, priceMax: number): Cooler[] {
        let newCoolersArray: Cooler[] = [];

        this.coolers.forEach((cooler) => {
            if (cooler.price >= priceMin && cooler.price <= priceMax)
                newCoolersArray.push(cooler);
        });

        return newCoolersArray;
    }

    applyHeightWithoutFanFilter(coolerHeightWithoutFan: number): Cooler[] {
        let newCoolersArray: Cooler[] = [];

        this.activeCoolers.forEach((cooler) => {
            if (cooler.heightWithoutFan >= coolerHeightWithoutFan)
                newCoolersArray.push(cooler);
        });

        return newCoolersArray;
    }

    applyHeightWithFanFilter(coolerHeightWithFan: number): Cooler[] {
        let newCoolersArray: Cooler[] = [];

        this.activeCoolers.forEach((cooler) => {
            if (cooler.heightWithFan >= coolerHeightWithFan)
                newCoolersArray.push(cooler);
        });

        return newCoolersArray;
    }

    applyManufacturerFilter(manufacturerCheckboxes: string[]): Cooler[] {
        let newCoolersArray: Cooler[] = [];

        if (manufacturerCheckboxes.length === 0) {
            return this.activeCoolers;
        } else {
            this.activeCoolers.forEach((cooler) => {
                manufacturerCheckboxes.forEach((manufacturer) => {
                    if (cooler.manufacturer === manufacturer)
                        newCoolersArray.push(cooler);
                });
            });
            return newCoolersArray;
        }
    }

    applySocketFilter(socketCheckboxes: string[]): Cooler[] {
        let newCoolersArray: Cooler[] = [];

        console.log(socketCheckboxes);

        if (socketCheckboxes.length === 0) {
            return this.activeCoolers;
        } else {
            socketCheckboxes = this.removeDuplicates(socketCheckboxes);
            console.log(socketCheckboxes);
            this.activeCoolers.forEach((cooler) => {
                socketCheckboxes.forEach((socketSupport) => {
                    cooler.socketCompatability.forEach((socket) => {
                        if (socket === socketSupport)
                            newCoolersArray.push(cooler);
                    });
                });
            });
            return newCoolersArray;
        }
    }
}
