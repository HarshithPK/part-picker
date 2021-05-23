import { Injectable } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Storage } from './storage.model';

@Injectable({ providedIn: 'root' })
export class StorageService {
    storages: Storage[] = [
        new Storage(
            'SEAGATE',
            'Seagate Barracuda',
            'Seagate Barracuda Compute 2 TB 7200RPM Internal Hard Drive',
            2,
            '7200RPM',
            256,
            '3.5"',
            'SATA 6 Gb/s',
            'No',
            'https://cdna.pcpartpicker.com/static/forever/images/product/c7b5b7dacbecdcdd0e073b761193eef6.1600.jpg',
            5200
        ),
        new Storage(
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
        ),
        new Storage(
            'CORSAIR',
            'Corsair FORCE Series',
            'Corsair MP600 Force Series Gen4 2 TB M.2-2280 NVME Solid State Drive',
            2,
            'SSD',
            0,
            'M.2-2280',
            'M.2 (M)',
            'Yes',
            'https://www.corsair.com/medias/sys_master/images/images/h96/h2d/9251963142174/-CSSD-F2000GBMP600-Gallery-MP600-13.png',
            35500
        ),
    ];

    constructor(private dataStoreService: DataStorageService) {}

    getStorages(): Storage[] {
        return this.storages.slice();
    }

    getStorage(index: number): Storage {
        return this.storages[index];
    }

    storeStorages(): void {
        this.dataStoreService.storeProducts(this.storages, 'storages');
    }
}
