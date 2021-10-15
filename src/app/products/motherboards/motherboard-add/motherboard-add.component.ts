import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Motherboard } from '../motherboard.model';
import { MotherboardService } from '../motherboard.service';

@Component({
    selector: 'app-motherboard-add',
    templateUrl: './motherboard-add.component.html',
    styleUrls: ['./motherboard-add.component.scss'],
})
export class MotherboardAddComponent implements OnInit {
    private motherboards: Motherboard[] = [];
    private motherboard!: Motherboard;

    constructor(
        private motherboardService: MotherboardService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.motherboards = this.motherboardService.getMotherboards();
    }

    onSubmit(form: NgForm) {
        const supportedMemorySpeed = form.value.supportedMemorySpeed.split(',');
        const dualGpuSupport = form.value.dualGpuSupport.split(',');
        const m2Slots = form.value.m2Slots.split(',');

        this.motherboard = new Motherboard(
            form.value.manufacturer,
            form.value.series,
            form.value.name,
            form.value.socket,
            form.value.chipset,
            form.value.formFactor,
            form.value.processorsSupported,
            form.value.maxMemorySupport,
            form.value.memoryType,
            form.value.memorySlots,
            supportedMemorySpeed,
            dualGpuSupport,
            form.value.pciex16Slots,
            form.value.pciex8Slots,
            form.value.pciex4Slots,
            form.value.pciex1Slots,
            form.value.pciSlots,
            m2Slots,
            form.value.sata6Gbps,
            form.value.ethernetPorts,
            form.value.USB2Headers,
            form.value.USB3Gen1Headers,
            form.value.USB3Gen2Headers,
            form.value.USB3Gen2x2Headers,
            form.value.wirelessSupport,
            form.value.imagePath,
            form.value.price
        );

        this.motherboards.push(this.motherboard);
        this.dataStorageService.storeMotherboards(this.motherboards);

        form.reset();

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
}
