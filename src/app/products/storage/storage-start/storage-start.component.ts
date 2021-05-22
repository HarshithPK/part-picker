import { Component, OnInit } from '@angular/core';

import { Storage } from '../storage.model';
import { StorageService } from '../storage.service';

@Component({
    selector: 'app-storage-start',
    templateUrl: './storage-start.component.html',
    styleUrls: ['./storage-start.component.scss'],
})
export class StorageStartComponent implements OnInit {
    storages!: Storage[];

    constructor(private storageService: StorageService) {}

    ngOnInit(): void {
        this.storages = this.storageService.getStorages();
    }
}
