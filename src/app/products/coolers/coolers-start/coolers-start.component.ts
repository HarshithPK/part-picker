import { Component, OnInit } from '@angular/core';

import { Cooler } from '../cooler.model';
import { CoolerService } from '../cooler.service';

@Component({
    selector: 'app-coolers-start',
    templateUrl: './coolers-start.component.html',
    styleUrls: ['./coolers-start.component.scss'],
})
export class CoolersStartComponent implements OnInit {
    coolers!: Cooler[];

    constructor(private coolerService: CoolerService) {}

    ngOnInit(): void {
        this.coolers = this.coolerService.getCoolers();
    }

    storeCoolers(): void {
        this.coolerService.storeCoolers();
    }

    loadCoolers(): void {}
}
