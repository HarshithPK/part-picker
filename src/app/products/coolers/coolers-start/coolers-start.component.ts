import { Component, OnInit } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Cooler } from '../cooler.model';
import { CoolerService } from '../cooler.service';

@Component({
    selector: 'app-coolers-start',
    templateUrl: './coolers-start.component.html',
    styleUrls: ['./coolers-start.component.scss'],
})
export class CoolersStartComponent implements OnInit {
    coolers: Cooler[] = null!;

    constructor(
        private coolerService: CoolerService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.coolers = this.coolerService.getCoolers();
    }

    storeCoolers(): void {
        this.dataStorageService.storeCoolers();
    }

    loadCoolers(): void {
        this.dataStorageService.fetchCoolers();
    }
}
