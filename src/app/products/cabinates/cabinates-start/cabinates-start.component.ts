import { Component, OnInit } from '@angular/core';

import { Cabinate } from '../cabinate.model';
import { CabinateService } from '../cabinate.service';

@Component({
    selector: 'app-cabinates-start',
    templateUrl: './cabinates-start.component.html',
    styleUrls: ['./cabinates-start.component.scss'],
})
export class CabinatesStartComponent implements OnInit {
    cabinates!: Cabinate[];

    constructor(private cabinateService: CabinateService) {}

    ngOnInit(): void {
        this.cabinates = this.cabinateService.getCabinates();
    }
}
