import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { Cabinate } from '../cabinate.model';
import { CabinateService } from '../cabinate.service';

@Component({
    selector: 'app-cabinates-start',
    templateUrl: './cabinates-start.component.html',
    styleUrls: ['./cabinates-start.component.scss'],
})
export class CabinatesStartComponent implements OnInit {
    cabinates!: Cabinate[];

    constructor(
        private cabinateService: CabinateService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.cabinates = this.cabinateService.getCabinates();
    }

    addCabinate(index: number): void {
        const cabinate = this.cabinateService.getCabinate(index);
        this.buildSystemService.addCabinate(cabinate);
        this.router.navigate(['/build-system']);
    }
}
