import { Component, OnInit } from '@angular/core';

import { Cabinate } from '../products/cabinates/cabinate.model';
import { Cooler } from '../products/coolers/cooler.model';
import { GraphicsCard } from '../products/graphics-card/graphics-card.model';
import { Memory } from '../products/memory/momery.model';
import { Motherboard } from '../products/motherboards/motherboard.model';
import { PowerSupply } from '../products/power-supplies/power-supply.model';
import { Processor } from '../products/processors/processor.model';
import { Storage } from '../products/storage/storage.model';

@Component({
    selector: 'app-build-system',
    templateUrl: './build-system.component.html',
    styleUrls: ['./build-system.component.scss'],
})
export class BuildSystemComponent implements OnInit {
    cpuSelected: Processor | null = null;
    coolerSelected: Cooler | null = null;
    motherboardSelected: Motherboard | null = null;
    memorySelected: Memory | null = null;
    storageSelected: Storage | null = null;
    graphicsCardSelected: GraphicsCard | null = null;
    cabinateSelected: Cabinate | null = null;
    powerSupplySelected: PowerSupply | null = null;

    constructor() {}

    ngOnInit(): void {}
}
