import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { MemoryService } from '../memory.service';
import { Memory } from '../momery.model';

@Component({
    selector: 'app-memory-add',
    templateUrl: './memory-add.component.html',
    styleUrls: ['./memory-add.component.scss'],
})
export class MemoryAddComponent implements OnInit {
    private memory: Memory[] = [];
    private ram!: Memory;

    constructor(
        private memoryService: MemoryService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.memory = this.memoryService.getMemory();
    }

    onSubmit(form: NgForm) {
        this.ram = new Memory(
            form.value.manufacturer,
            form.value.series,
            form.value.name,
            form.value.color,
            form.value.memorySize,
            form.value.memoryType,
            form.value.memorySpeed,
            form.value.formFactor,
            form.value.casLatency,
            form.value.voltage,
            form.value.timing,
            form.value.modules,
            form.value.heatSpreader,
            form.value.ecc,
            form.value.imagePath,
            form.value.price
        );

        this.memory.push(this.ram);
        this.dataStorageService.storeMemory(this.memory);

        form.reset();

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
}
