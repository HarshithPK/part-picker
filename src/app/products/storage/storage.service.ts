import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Storage } from './storage.model';

@Injectable({ providedIn: 'root' })
export class StorageService {
    storagesChanged = new Subject<Storage[]>();
    activeStoragesChanged = new Subject<Storage[]>();

    // storages: Storage[] = [
    //     new Storage(
    //         'SEAGATE',
    //         'Seagate Barracuda',
    //         'Seagate Barracuda Compute 2 TB 7200RPM Internal Hard Drive',
    //         2,
    //         '7200RPM',
    //         256,
    //         '3.5"',
    //         'SATA 6 Gb/s',
    //         'No',
    //         'https://cdna.pcpartpicker.com/static/forever/images/product/c7b5b7dacbecdcdd0e073b761193eef6.1600.jpg',
    //         5200
    //     ),
    //     new Storage(
    //         'SAMSUNG',
    //         'Samsung 980 Pro',
    //         'Samsung 980 Pro 1 TB M.2-2280 NVME Solid State Drive',
    //         1,
    //         'SSD',
    //         1024,
    //         'M.2-2280',
    //         'M.2 (M)',
    //         'Yes',
    //         'https://images.samsung.com/is/image/samsung/p6pim/in/mz-v8v1t0bw/gallery/in-980-nvme-m2-ssd-mz-v8v1t0bw-401585125?$684_547_PNG$',
    //         19550
    //     ),
    //     new Storage(
    //         'CORSAIR',
    //         'Corsair FORCE Series',
    //         'Corsair MP600 Force Series Gen4 2 TB M.2-2280 NVME Solid State Drive',
    //         2,
    //         'SSD',
    //         0,
    //         'M.2-2280',
    //         'M.2 (M)',
    //         'Yes',
    //         'https://www.corsair.com/medias/sys_master/images/images/h96/h2d/9251963142174/-CSSD-F2000GBMP600-Gallery-MP600-13.png',
    //         35500
    //     ),
    // ];

    private storages: Storage[] = [];
    private activeStorages: Storage[] = [];

    constructor() {}

    setStorages(storages: Storage[]) {
        this.storages = storages;
        this.activeStorages = storages.sort((a, b) => a.price - b.price);

        this.storagesChanged.next(this.storages.slice());
        this.activeStoragesChanged.next(this.activeStorages.slice());
    }

    getStorages(): Storage[] {
        return this.storages.slice();
    }

    getStorage(index: number): Storage {
        return this.activeStorages[index];
    }

    applyAllFilters(
        manufacturerCheckboxes: string[],
        typeCheckboxes: string[],
        formFactorCheckboxes: string[],
        NVMECheckbox: string,
        priceMin: number,
        priceMax: number,
        capacity: number
    ): Storage[] {
        this.activeStorages = this.applyPriceFilter(priceMin, priceMax);

        this.activeStorages = this.applyCapacityFilter(capacity);

        this.activeStorages = this.applyManufacturerFilter(
            manufacturerCheckboxes
        );

        this.activeStorages = this.applyTypeFilter(typeCheckboxes);

        this.activeStorages = this.applyFormFactorFilter(formFactorCheckboxes);

        this.activeStorages = this.applyNVMEFilter(NVMECheckbox);

        return this.activeStorages.slice();
    }

    applyPriceFilter(priceMin: number, priceMax: number): Storage[] {
        let newStoragesArray: Storage[] = [];

        this.storages.forEach((storage) => {
            if (storage.price >= priceMin && storage.price <= priceMax)
                newStoragesArray.push(storage);
        });

        return newStoragesArray;
    }

    applyCapacityFilter(capacity: number): Storage[] {
        let newStoragesArray: Storage[] = [];

        this.activeStorages.forEach((storage) => {
            if (storage.capacity >= capacity) newStoragesArray.push(storage);
        });

        return newStoragesArray;
    }

    applyManufacturerFilter(manufacturerCheckboxes: string[]): Storage[] {
        let newStoragesArray: Storage[] = [];

        if (manufacturerCheckboxes.length === 0) {
            return this.activeStorages;
        } else {
            this.activeStorages.forEach((storage) => {
                manufacturerCheckboxes.forEach((manufacturer) => {
                    if (storage.manufacturer === manufacturer)
                        newStoragesArray.push(storage);
                });
            });
            return newStoragesArray;
        }
    }

    applyTypeFilter(typeCheckboxes: string[]): Storage[] {
        let newStoragesArray: Storage[] = [];

        if (typeCheckboxes.length === 0) {
            return this.activeStorages;
        } else {
            this.activeStorages.forEach((storage) => {
                typeCheckboxes.forEach((type) => {
                    if (storage.type === type) newStoragesArray.push(storage);
                });
            });
            return newStoragesArray;
        }
    }

    applyFormFactorFilter(formFactorCheckboxes: string[]): Storage[] {
        let newStoragesArray: Storage[] = [];

        if (formFactorCheckboxes.length === 0) {
            return this.activeStorages;
        } else {
            this.activeStorages.forEach((storage) => {
                formFactorCheckboxes.forEach((formFactor) => {
                    if (storage.formFactor === formFactor)
                        newStoragesArray.push(storage);
                });
            });
            return newStoragesArray;
        }
    }

    applyNVMEFilter(NVMECheckbox: string): Storage[] {
        let newStoragesArray: Storage[] = [];

        if (NVMECheckbox.length === 0) {
            return this.activeStorages;
        } else {
            this.activeStorages.forEach((storage) => {
                if (storage.NVME === NVMECheckbox)
                    newStoragesArray.push(storage);
            });
            return newStoragesArray;
        }
    }
}
