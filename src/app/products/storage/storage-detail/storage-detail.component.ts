import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Storage } from '../storage.model';
import { StorageService } from '../storage.service';

@Component({
    selector: 'app-storage-detail',
    templateUrl: './storage-detail.component.html',
    styleUrls: ['./storage-detail.component.scss'],
})
export class StorageDetailComponent implements OnInit {
    id!: number;
    storage!: Storage;

    constructor(
        private storageService: StorageService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.storage = this.storageService.getStorage(this.id);
        });
    }
}
