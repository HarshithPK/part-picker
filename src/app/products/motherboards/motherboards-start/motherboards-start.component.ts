import { Component, OnInit } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Motherboard } from '../motherboard.model';
import { MotherboardService } from '../motherboard.service';

@Component({
    selector: 'app-motherboards-start',
    templateUrl: './motherboards-start.component.html',
    styleUrls: ['./motherboards-start.component.scss'],
})
export class MotherboardsStartComponent implements OnInit {
    motherboards!: Motherboard[];

    constructor(private motherboardService: MotherboardService) {}

    ngOnInit(): void {
        this.motherboards = this.motherboardService.getMotherboards();
    }

    storeMotherboards(): void {
        this.motherboardService.storeMotherboards();
    }

    loadMotherboards(): void {
        // this.dataStoreService.loadProcessors();
    }
}
