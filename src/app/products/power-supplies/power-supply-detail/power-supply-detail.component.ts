import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PowerSupply } from '../power-supply.model';
import { PowerSupplyService } from '../power-supply.service';

@Component({
    selector: 'app-power-supply-detail',
    templateUrl: './power-supply-detail.component.html',
    styleUrls: ['./power-supply-detail.component.scss'],
})
export class PowerSupplyDetailComponent implements OnInit {
    id!: number;
    powerSupply!: PowerSupply;

    constructor(
        private powerSupplyService: PowerSupplyService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.powerSupply = this.powerSupplyService.getPowerSupply(this.id);
        });
    }
}
