import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Cabinate } from '../products/cabinates/cabinate.model';
import { Cooler } from '../products/coolers/cooler.model';
import { GraphicsCard } from '../products/graphics-card/graphics-card.model';
import { Memory } from '../products/memory/momery.model';
import { Motherboard } from '../products/motherboards/motherboard.model';
import { PowerSupply } from '../products/power-supplies/power-supply.model';
import { Processor } from '../products/processors/processor.model';
import { Storage } from '../products/storage/storage.model';

@Injectable({ providedIn: 'root' })
export class BuildSystemService {
    // tslint:disable-next-line: no-non-null-assertion
    private cpuSelected: Processor = null!;
    cpuSelectedChanged = new Subject<Processor>();

    // tslint:disable-next-line: no-non-null-assertion
    private coolerSelected: Cooler = null!;
    coolerSelectedChanged = new Subject<Cooler>();

    // tslint:disable-next-line: no-non-null-assertion
    private motherboardSelected: Motherboard = null!;
    motherboardSelectedChanged = new Subject<Motherboard>();

    // tslint:disable-next-line: no-non-null-assertion
    private memorySelected: Memory = null!;
    memorySelectedChanged = new Subject<Memory>();

    // tslint:disable-next-line: no-non-null-assertion
    private storageSelected: Storage = null!;
    storageSelectedChanged = new Subject<Storage>();

    // tslint:disable-next-line: no-non-null-assertion
    private graphicsCardSelected: GraphicsCard = null!;
    graphicsCardSelectedChanged = new Subject<GraphicsCard>();

    // tslint:disable-next-line: no-non-null-assertion
    private cabinateSelected: Cabinate = null!;
    cabinateSelectedChanged = new Subject<Cabinate>();

    // tslint:disable-next-line: no-non-null-assertion
    private powerSupplySelected: PowerSupply = null!;
    powerSupplySelectedChanged = new Subject<PowerSupply>();

    addCPU(cpu: Processor): void {
        this.cpuSelected = cpu;
        this.cpuSelectedChanged.next(this.cpuSelected);
    }

    getCPU(): Processor {
        return this.cpuSelected;
    }

    addCooler(cooler: Cooler): void {
        this.coolerSelected = cooler;
        this.coolerSelectedChanged.next(this.coolerSelected);
    }

    getCooler(): Cooler {
        return this.coolerSelected;
    }

    addMotherboard(motherboard: Motherboard): void {
        this.motherboardSelected = motherboard;
        this.motherboardSelectedChanged.next(this.motherboardSelected);
    }

    getMotherboard(): Motherboard {
        return this.motherboardSelected;
    }

    addMemory(memory: Memory): void {
        this.memorySelected = memory;
        this.memorySelectedChanged.next(this.memorySelected);
    }

    getMemory(): Memory {
        return this.memorySelected;
    }

    addStorage(storage: Storage): void {
        this.storageSelected = storage;
        this.storageSelectedChanged.next(this.storageSelected);
    }

    getStorage(): Storage {
        return this.storageSelected;
    }

    addGraphicsCard(graphicsCard: GraphicsCard): void {
        this.graphicsCardSelected = graphicsCard;
        this.graphicsCardSelectedChanged.next(this.graphicsCardSelected);
    }

    getGraphicsCard(): GraphicsCard {
        return this.graphicsCardSelected;
    }

    addCabinate(cabinate: Cabinate): void {
        this.cabinateSelected = cabinate;
        this.cabinateSelectedChanged.next(this.cabinateSelected);
    }

    getCabinate(): Cabinate {
        return this.cabinateSelected;
    }

    addPowerSupply(powerSupply: PowerSupply): void {
        this.powerSupplySelected = powerSupply;
        this.powerSupplySelectedChanged.next(this.powerSupplySelected);
    }

    getPowerSupply(): PowerSupply {
        return this.powerSupplySelected;
    }
}
