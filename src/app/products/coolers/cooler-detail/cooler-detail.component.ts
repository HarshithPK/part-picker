import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Cooler } from '../cooler.model';
import { CoolerService } from '../cooler.service';

@Component({
    selector: 'app-cooler-detail',
    templateUrl: './cooler-detail.component.html',
    styleUrls: ['./cooler-detail.component.scss'],
})
export class CoolerDetailComponent implements OnInit {
    id!: number;
    cooler!: Cooler;

    constructor(
        private coolerService: CoolerService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.cooler = this.coolerService.getCooler(this.id);
        });
    }
}
