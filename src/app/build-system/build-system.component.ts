import { Component, OnInit } from '@angular/core';

import { Cabinate } from '../products/cabinates/cabinate.model';
import { Cooler } from '../products/coolers/cooler.model';
import { GraphicsCard } from '../products/graphics-card/graphics-card.model';
import { Memory } from '../products/memory/momery.model';
import { Motherboard } from '../products/motherboards/motherboard.model';
import { PowerSupply } from '../products/power-supplies/power-supply.model';
import { Processor } from '../products/processors/processor.model';
import { Storage } from '../products/storage/storage.model';
import { BuildSystemService } from './build-system.service';

@Component({
    selector: 'app-build-system',
    templateUrl: './build-system.component.html',
    styleUrls: ['./build-system.component.scss'],
})
export class BuildSystemComponent implements OnInit {
    cpuSelected: Processor = null!;
    coolerSelected: Cooler = null!;
    motherboardSelected: Motherboard = null!;
    memorySelected: Memory = null!;
    storageSelected: Storage = null!;
    graphicsCardSelected: GraphicsCard = null!;
    cabinateSelected: Cabinate = null!;
    powerSupplySelected: PowerSupply = null!;

    constructor(private buildSystemService: BuildSystemService) {}

    ngOnInit(): void {
        this.cpuSelected = this.buildSystemService.getCPU();
        this.coolerSelected = this.buildSystemService.getCooler();
        this.motherboardSelected = this.buildSystemService.getMotherboard();
        this.memorySelected = this.buildSystemService.getMemory();
        this.storageSelected = this.buildSystemService.getStorage();
        this.graphicsCardSelected = this.buildSystemService.getGraphicsCard();
        this.cabinateSelected = this.buildSystemService.getCabinate();
        this.powerSupplySelected = this.buildSystemService.getPowerSupply();
    }

    removeCPU(): void {
        this.cpuSelected = null!;
        this.buildSystemService.removeCPU();
    }

    removeCooler(): void {
        this.coolerSelected = null!;
        this.buildSystemService.removeCooler();
    }

    removeMotherboard(): void {
        this.motherboardSelected = null!;
        this.buildSystemService.removeMotherboard();
    }

    removeMemory(): void {
        this.memorySelected = null!;
        this.buildSystemService.removeMemory();
    }

    removeStorage(): void {
        this.storageSelected = null!;
        this.buildSystemService.removeStorage();
    }

    removeGraphicsCard(): void {
        this.graphicsCardSelected = null!;
        this.buildSystemService.removeGraphicsCard();
    }

    removeCabinate(): void {
        this.cabinateSelected = null!;
        this.buildSystemService.removeCabinate();
    }

    removePowerSupply(): void {
        this.powerSupplySelected = null!;
        this.buildSystemService.removePowerSupply();
    }
}
