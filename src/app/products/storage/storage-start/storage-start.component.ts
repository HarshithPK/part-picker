import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { Storage } from '../storage.model';
import { StorageService } from '../storage.service';

@Component({
    selector: 'app-storage-start',
    templateUrl: './storage-start.component.html',
    styleUrls: ['./storage-start.component.scss'],
})
export class StorageStartComponent implements OnInit {
    storages: Storage[] = null!;

    priceMin: number | undefined;
    priceMax: number | undefined;

    capacity: number = 0.5;

    NVMECheckbox: string = null!;

    manufacturerCheckboxes: string[] = [];
    typeCheckboxes: string[] = [];
    formFactorCheckboxes: string[] = [];

    constructor(
        private storageService: StorageService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.storages = this.storageService.getStorages();
    }

    addStorage(index: number): void {
        const storage = this.storageService.getStorage(index);
        this.buildSystemService.addStorage(storage);
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

        this.storages = this.storageService.applyAllFilters(
            this.manufacturerCheckboxes,
            this.typeCheckboxes,
            this.formFactorCheckboxes,
            this.NVMECheckbox,
            activePriceMin,
            activePriceMax,
            this.capacity
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

        if (type === 'type') {
            if (event.target.checked) {
                this.typeCheckboxes.push(name);
            } else {
                this.typeCheckboxes.forEach((element, index) => {
                    if (element === name) this.typeCheckboxes.splice(index, 1);
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

        if (type === 'nvme') {
            if (event.target.checked) {
                this.NVMECheckbox = name;
            } else {
                this.NVMECheckbox = '';
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
