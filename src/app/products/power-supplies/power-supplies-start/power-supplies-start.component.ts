import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { PowerSupply } from '../power-supply.model';
import { PowerSupplyService } from '../power-supply.service';

@Component({
    selector: 'app-power-supplies-start',
    templateUrl: './power-supplies-start.component.html',
    styleUrls: ['./power-supplies-start.component.scss'],
})
export class PowerSuppliesStartComponent implements OnInit {
    powerSupplies!: PowerSupply[];

    constructor(private powerSupplyService: PowerSupplyService, private http: HttpClient) {}

    ngOnInit(): void {
        const url = 'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/powerSupplies.json';
        this.http.get<PowerSupply[]>(url).subscribe(powerSupplies => {
            this.powerSupplies = powerSupplies;
        })
    }

    storePowerSupply(): void {
        this.powerSupplyService.storePowerSupply();
    }

    loadPowerSupply(): void {}
}
