import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
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
        private dataStorageService: DataStorageService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.coolers = this.coolerService.getCoolers();
    }

    addCooler(index: number): void {
        const cooler = this.coolerService.getCooler(index);
        this.buildSystemService.addCooler(cooler);
        this.router.navigate(['/build-system']);
    }

    storeCoolers(): void {
        // this.dataStorageService.storeCoolers();
    }

    loadCoolers(): void {
        this.dataStorageService.fetchCoolers();
    }
}
