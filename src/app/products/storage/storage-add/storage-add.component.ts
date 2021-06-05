import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Storage } from '../storage.model';
import { StorageService } from '../storage.service';

@Component({
    selector: 'app-storage-add',
    templateUrl: './storage-add.component.html',
    styleUrls: ['./storage-add.component.scss'],
})
export class StorageAddComponent implements OnInit {
    private storages: Storage[] = [];
    private storage!: Storage;

    constructor(
        private storageService: StorageService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.storages = this.storageService.getStorages();
    }

    onSubmit(form: NgForm) {
        this.storage = new Storage(
            form.value.manufacturer,
            form.value.series,
            form.value.name,
            form.value.capacity,
            form.value.type,
            form.value.cache,
            form.value.formFactor,
            form.value.storageInterface,
            form.value.NVME,
            form.value.imagePath,
            form.value.price
        );

        this.storages.push(this.storage);
        this.dataStorageService.storeStorages(this.storages);

        form.reset();
    }
}
