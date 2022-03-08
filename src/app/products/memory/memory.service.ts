import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Memory } from './momery.model';

@Injectable({ providedIn: 'root' })
export class MemoryService {
    private memoryChanged = new Subject<Memory[]>();
    private activeMemoryChanged = new Subject<Memory[]>();

    private memory: Memory[] = [];
    private activeMemory: Memory[] = [];
    private manufacturerNames: string[] = [];

    constructor() {}

    setMemory(memory: Memory[]) {
        this.memory = memory;
        this.activeMemory = memory.sort((a, b) => a.price - b.price);

        this.setManufacturerNames();

        this.memoryChanged.next(this.memory.slice());
        this.activeMemoryChanged.next(this.activeMemory.slice());
    }

    getMemory(): Memory[] {
        return this.memory.slice();
    }

    setManufacturerNames() {
        this.memory.forEach((ram) => {
            this.manufacturerNames.push(ram.manufacturer);
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

    getRAM(index: number): Memory {
        return this.activeMemory[index];
    }

    applyAllFilters(
        manufacturerCheckboxes: string[],
        memoryTypeCheckboxes: string[],
        memoryModuleCheckboxes: string[],
        memorySpeedCheckboxes: string[],
        formFactorCheckboxes: string[],
        priceMin: number,
        priceMax: number,
        memorySize: number
    ): Memory[] {
        this.activeMemory = this.applyPriceFilter(priceMin, priceMax);

        this.activeMemory = this.applyMemorySizeFilter(memorySize);

        this.activeMemory = this.applyManufacturerFilter(
            manufacturerCheckboxes
        );

        this.activeMemory = this.applyMemoryTypeFilter(memoryTypeCheckboxes);

        this.activeMemory = this.applyMemoryModuleFilter(
            memoryModuleCheckboxes
        );

        this.activeMemory = this.applyMemorySpeedFilter(memorySpeedCheckboxes);

        this.activeMemory = this.applyFormFactorFilter(formFactorCheckboxes);

        return this.activeMemory.slice();
    }

    applyPriceFilter(priceMin: number, priceMax: number): Memory[] {
        let newMemoryArray: Memory[] = [];

        this.memory.forEach((memory) => {
            if (memory.price >= priceMin && memory.price <= priceMax)
                newMemoryArray.push(memory);
        });

        return newMemoryArray;
    }

    applyMemorySizeFilter(memorySize: number): Memory[] {
        let newMemoryArray: Memory[] = [];

        this.activeMemory.forEach((memory) => {
            if (memory.memorySize >= memorySize) newMemoryArray.push(memory);
        });
        return newMemoryArray;
    }

    applyManufacturerFilter(manufacturerCheckboxes: string[]) {
        let newMemoryArray: Memory[] = [];

        if (manufacturerCheckboxes.length === 0) {
            return this.activeMemory;
        } else {
            this.activeMemory.forEach((memory) => {
                manufacturerCheckboxes.forEach((manufacturer) => {
                    if (memory.manufacturer === manufacturer)
                        newMemoryArray.push(memory);
                });
            });
            return newMemoryArray;
        }
    }

    applyMemoryTypeFilter(memoryTypeCheckboxes: string[]): Memory[] {
        let newMemoryArray: Memory[] = [];

        if (memoryTypeCheckboxes.length === 0) {
            return this.activeMemory;
        } else {
            this.activeMemory.forEach((memory) => {
                memoryTypeCheckboxes.forEach((memoryType) => {
                    if (memory.memoryType === memoryType)
                        newMemoryArray.push(memory);
                });
            });
            return newMemoryArray;
        }
    }

    applyMemoryModuleFilter(memoryModuleCheckboxes: string[]): Memory[] {
        let newMemoryArray: Memory[] = [];

        if (memoryModuleCheckboxes.length === 0) {
            return this.activeMemory;
        } else {
            this.activeMemory.forEach((memory) => {
                memoryModuleCheckboxes.forEach((memoryModule) => {
                    if (memory.modules === memoryModule)
                        newMemoryArray.push(memory);
                });
            });
            return newMemoryArray;
        }
    }

    applyMemorySpeedFilter(memorySpeedCheckboxes: string[]): Memory[] {
        let newMemoryArray: Memory[] = [];

        if (memorySpeedCheckboxes.length === 0) {
            return this.activeMemory;
        } else {
            this.activeMemory.forEach((memory) => {
                memorySpeedCheckboxes.forEach((memorySpeed) => {
                    if (memory.speed >= parseInt(memorySpeed))
                        newMemoryArray.push(memory);
                });
            });
            return newMemoryArray;
        }
    }

    applyFormFactorFilter(formFactorCheckboxes: string[]): Memory[] {
        let newMemoryArray: Memory[] = [];

        if (formFactorCheckboxes.length === 0) {
            return this.activeMemory;
        } else {
            this.activeMemory.forEach((memory) => {
                formFactorCheckboxes.forEach((formFactor) => {
                    if (memory.formFactor === formFactor)
                        newMemoryArray.push(memory);
                });
            });
            return newMemoryArray;
        }
    }
}
