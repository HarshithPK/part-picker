import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

import { Storage } from '../storage.model';
import { StorageService } from '../storage.service';

@Component({
    selector: 'app-storage-start',
    templateUrl: './storage-start.component.html',
    styleUrls: ['./storage-start.component.scss'],
})
export class StorageStartComponent implements OnInit {
    storages: Storage[] = null!;

    constructor(
        private storageService: StorageService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.storages = this.storageService.getStorages();
    }

    storeStorages(): void {
        this.dataStorageService.storeStorages();
    }

    loadStorages(): void {
        this.dataStorageService.fetchStorages();
    }
}
