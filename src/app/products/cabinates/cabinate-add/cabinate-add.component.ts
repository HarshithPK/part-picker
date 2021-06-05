import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Cabinate } from '../cabinate.model';
import { CabinateService } from '../cabinate.service';

@Component({
    selector: 'app-cabinate-add',
    templateUrl: './cabinate-add.component.html',
    styleUrls: ['./cabinate-add.component.scss'],
})
export class CabinateAddComponent implements OnInit {
    private cabinates: Cabinate[] = [];
    private cabinate!: Cabinate;

    constructor(
        private cabinateService: CabinateService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.cabinates = this.cabinateService.getCabinates();
    }

    onSubmit(form: NgForm) {
        this.cabinate = new Cabinate(
            form.value.manufacturer,
            form.value.series,
            form.value.name,
            form.value.type,
            form.value.powerSupply,
            form.value.color,
            form.value.dimensions,
            form.value.ioPorts,
            form.value.motherboardSupport,
            form.value.sidePanel,
            form.value.material,
            form.value.maxPSULength,
            form.value.maxGPULength,
            form.value.maxCPUClearance,
            form.value.fanSupport,
            form.value.dustFilters,
            form.value.imagePath,
            form.value.price
        );

        this.cabinates.push(this.cabinate);
        this.dataStorageService.storeCabinates(this.cabinates);

        form.reset();
    }
}
