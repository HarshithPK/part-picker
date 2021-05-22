import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Cabinate } from '../cabinate.model';
import { CabinateService } from '../cabinate.service';

@Component({
    selector: 'app-cabinate-detail',
    templateUrl: './cabinate-detail.component.html',
    styleUrls: ['./cabinate-detail.component.scss'],
})
export class CabinateDetailComponent implements OnInit {
    id!: number;
    cabinate!: Cabinate;

    constructor(
        private cabinateService: CabinateService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.cabinate = this.cabinateService.getCabinate(this.id);
        });
    }
}
