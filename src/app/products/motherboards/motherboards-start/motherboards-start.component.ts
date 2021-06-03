import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
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
        private dataStorageService: DataStorageService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.motherboards = this.motherboardService.getMotherboards();
    }

    addMotherboard(index: number): void {
        const motherboard = this.motherboardService.getMotherbboard(index);
        this.buildSystemService.addMotherboard(motherboard);
        this.router.navigate(['/build-system']);
    }

    storeMotherboards(): void {
        this.dataStorageService.storeMotherboards();
    }

    loadMotherboards(): void {
        this.dataStorageService.fetchMotherboards();
    }
}
