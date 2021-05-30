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
    motherboards: Motherboard[] = null!;

    constructor(
        private motherboardService: MotherboardService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.motherboards = this.motherboardService.getMotherboards();
    }

    storeMotherboards(): void {
        this.dataStorageService.storeMotherboards();
    }

    loadMotherboards(): void {
        this.dataStorageService.fetchMotherboards();
    }
}
