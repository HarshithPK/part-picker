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
    // tslint:disable-next-line: no-non-null-assertion
    cpuSelected: Processor = null!;
    // tslint:disable-next-line: no-non-null-assertion
    coolerSelected: Cooler = null!;
    // tslint:disable-next-line: no-non-null-assertion
    motherboardSelected: Motherboard = null!;
    // tslint:disable-next-line: no-non-null-assertion
    memorySelected: Memory = null!;
    // tslint:disable-next-line: no-non-null-assertion
    storageSelected: Storage = null!;
    // tslint:disable-next-line: no-non-null-assertion
    graphicsCardSelected: GraphicsCard = null!;
    // tslint:disable-next-line: no-non-null-assertion
    cabinateSelected: Cabinate = null!;
    // tslint:disable-next-line: no-non-null-assertion
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
}
