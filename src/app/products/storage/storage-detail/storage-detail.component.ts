import { Component, OnInit } from '@angular/core';
import { Storage } from '../storage.model';

@Component({
    selector: 'app-storage-detail',
    templateUrl: './storage-detail.component.html',
    styleUrls: ['./storage-detail.component.scss'],
})
export class StorageDetailComponent implements OnInit {
    storage: Storage = new Storage(
        'SAMSUNG',
        'Samsung 980 Pro',
        'Samsung 980 Pro 1 TB M.2-2280 NVME Solid State Drive',
        1,
        'SSD',
        1024,
        'M.2-2280',
        'M.2 (M)',
        'Yes',
        'https://images.samsung.com/is/image/samsung/p6pim/in/mz-v8v1t0bw/gallery/in-980-nvme-m2-ssd-mz-v8v1t0bw-401585125?$684_547_PNG$',
        19550
    );

    constructor() {}

    ngOnInit(): void {}
}
