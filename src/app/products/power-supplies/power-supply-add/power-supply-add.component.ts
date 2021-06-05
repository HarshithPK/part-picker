import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { PowerSupply } from '../power-supply.model';
import { PowerSupplyService } from '../power-supply.service';

@Component({
    selector: 'app-power-supply-add',
    templateUrl: './power-supply-add.component.html',
    styleUrls: ['./power-supply-add.component.scss'],
})
export class PowerSupplyAddComponent implements OnInit {
    private powerSupplies: PowerSupply[] = [];
    private powerSupply!: PowerSupply;

    constructor(
        private powerSupplyService: PowerSupplyService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.powerSupplies = this.powerSupplyService.getPowerSupplies();
    }

    onSubmit(form: NgForm) {
        this.powerSupply = new PowerSupply(
            form.value.manufacturer,
            form.value.series,
            form.value.name,
            form.value.formFactor,
            form.value.efficiencyRating,
            form.value.wattage,
            form.value.modular,
            form.value.length,
            form.value.color,
            form.value.fanless,
            form.value.EPSConnectors,
            form.value.PCIe62PinConnectors,
            form.value.SATAConnectors,
            form.value.Molex4PinConnectors,
            form.value.imagePath,
            form.value.price
        );

        this.powerSupplies.push(this.powerSupply);
        this.dataStorageService.storePowerSupplies(this.powerSupplies);

        form.reset();
    }
}
