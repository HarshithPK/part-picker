import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BuildSystemService } from 'src/app/build-system/build-system.service';

import { PowerSupply } from '../power-supply.model';
import { PowerSupplyService } from '../power-supply.service';

@Component({
    selector: 'app-power-supply-detail',
    templateUrl: './power-supply-detail.component.html',
    styleUrls: ['./power-supply-detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PowerSupplyDetailComponent implements OnInit {
    id!: number;
    powerSupply!: PowerSupply;

    constructor(
        private powerSupplyService: PowerSupplyService,
        private route: ActivatedRoute,
        private buildServiceSystem: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.powerSupply = this.powerSupplyService.getPowerSupply(this.id);
        });
    }

    addPowerSupply(): void {
        this.buildServiceSystem.addPowerSupply(this.powerSupply);
        this.router.navigate(['/build-system']);
    }
}
