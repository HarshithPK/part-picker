import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
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
        private dataStorageService: DataStorageService,
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

    storeStorages(): void {
        // this.dataStorageService.storeStorages();
    }

    loadStorages(): void {
        this.dataStorageService.fetchStorages();
    }
}
