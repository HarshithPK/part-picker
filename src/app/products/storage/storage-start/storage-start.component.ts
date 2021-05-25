import { HttpClient } from '@angular/common/http';
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

    constructor(private storageService: StorageService, private http: HttpClient) {}

    ngOnInit(): void {
        const url = 'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/storages.json';
        this.http.get<Storage[]>(url).subscribe(storages => {
            this.storages = storages;
        })
    }

    storeStorages(): void {
        this.storageService.storeStorages();
    }

    loadStorages(): void {}
}
