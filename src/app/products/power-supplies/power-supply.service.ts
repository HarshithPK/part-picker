import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { PowerSupply } from './power-supply.model';

@Injectable({ providedIn: 'root' })
export class PowerSupplyService {
    powerSuppliesChanged = new Subject<PowerSupply[]>();
    activePowerSuppliesChanged = new Subject<PowerSupply[]>();

    private powerSupplies: PowerSupply[] = [];
    private activePowerSupplies: PowerSupply[] = [];

    constructor() {}

    setPowerSupplies(powerSupplies: PowerSupply[]) {
        this.powerSupplies = powerSupplies;
        this.activePowerSupplies = powerSupplies.sort(
            (a, b) => a.price - b.price
        );

        this.powerSuppliesChanged.next(this.powerSupplies.slice());
        this.activePowerSuppliesChanged.next(this.activePowerSupplies.slice());
    }

    getPowerSupplies(): PowerSupply[] {
        return this.powerSupplies.slice();
    }

    getPowerSupply(index: number): PowerSupply {
        return this.activePowerSupplies[index];
    }

    applyAllFilters(
        formFactorCheckboxes: string[],
        modularCheckboxes: string[],
        efficiencyRatingCheckboxes: string[],
        priceMin: number,
        priceMax: number,
        wattageMin: number,
        wattageMax: number
    ): PowerSupply[] {
        this.activePowerSupplies = this.applyPriceFilter(priceMin, priceMax);

        this.activePowerSupplies =
            this.applyFormFactorFilter(formFactorCheckboxes);

        this.activePowerSupplies =
            this.applyModularityFilter(modularCheckboxes);

        this.activePowerSupplies = this.applyWattageFilter(
            wattageMin,
            wattageMax
        );

        this.activePowerSupplies = this.applyEfficiencyRatingFilter(
            efficiencyRatingCheckboxes
        );

        return this.activePowerSupplies.slice();
    }

    applyPriceFilter(priceMin: number, priceMax: number): PowerSupply[] {
        let newPowerSuppliesArray: PowerSupply[] = [];

        this.powerSupplies.forEach((powerSupply) => {
            if (powerSupply.price >= priceMin && powerSupply.price <= priceMax)
                newPowerSuppliesArray.push(powerSupply);
        });

        return newPowerSuppliesArray;
    }

    applyFormFactorFilter(formFactorCheckboxes: string[]): PowerSupply[] {
        let newPowerSuppliesArray: PowerSupply[] = [];

        if (formFactorCheckboxes.length === 0) {
            return this.activePowerSupplies;
        } else {
            this.activePowerSupplies.forEach((powerSupply) => {
                formFactorCheckboxes.forEach((formFactor) => {
                    if (powerSupply.formFactor === formFactor)
                        newPowerSuppliesArray.push(powerSupply);
                });
            });

            return newPowerSuppliesArray;
        }
    }

    applyModularityFilter(modularCheckboxes: string[]): PowerSupply[] {
        let newPowerSuppliesArray: PowerSupply[] = [];

        if (modularCheckboxes.length === 0) {
            return this.activePowerSupplies;
        } else {
            this.activePowerSupplies.forEach((powerSupply) => {
                modularCheckboxes.forEach((modularity) => {
                    if (powerSupply.modular === modularity)
                        newPowerSuppliesArray.push(powerSupply);
                });
            });
            return newPowerSuppliesArray;
        }
    }

    applyWattageFilter(wattageMin: number, wattageMax: number): PowerSupply[] {
        let newPowerSuppliesArray: PowerSupply[] = [];

        this.activePowerSupplies.forEach((powerSupply) => {
            if (
                powerSupply.wattage >= wattageMin &&
                powerSupply.wattage <= wattageMax
            ) {
                newPowerSuppliesArray.push(powerSupply);
            }
        });

        return newPowerSuppliesArray;
    }

    applyEfficiencyRatingFilter(
        efficiencyRatingCheckboxes: string[]
    ): PowerSupply[] {
        let newPowerSuppliesArray: PowerSupply[] = [];

        if (efficiencyRatingCheckboxes.length === 0) {
            return this.activePowerSupplies;
        } else {
            this.activePowerSupplies.forEach((powerSupply) => {
                efficiencyRatingCheckboxes.forEach((efficiencyRating) => {
                    if (powerSupply.efficiencyRating === efficiencyRating)
                        newPowerSuppliesArray.push(powerSupply);
                });
            });

            return newPowerSuppliesArray;
        }
    }
}
