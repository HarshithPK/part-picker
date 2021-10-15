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
    private cpuSelected: Processor = null!;
    cpuSelectedChanged = new Subject<Processor>();

    private coolerSelected: Cooler = null!;
    coolerSelectedChanged = new Subject<Cooler>();

    private motherboardSelected: Motherboard = null!;
    motherboardSelectedChanged = new Subject<Motherboard>();

    private memorySelected: Memory = null!;
    memorySelectedChanged = new Subject<Memory>();

    private storageSelected: Storage = null!;
    storageSelectedChanged = new Subject<Storage>();

    private graphicsCardSelected: GraphicsCard = null!;
    graphicsCardSelectedChanged = new Subject<GraphicsCard>();

    private cabinateSelected: Cabinate = null!;
    cabinateSelectedChanged = new Subject<Cabinate>();

    private powerSupplySelected: PowerSupply = null!;
    powerSupplySelectedChanged = new Subject<PowerSupply>();

    addCPU(cpu: Processor): void {
        this.cpuSelected = cpu;
        this.cpuSelectedChanged.next(this.cpuSelected);
    }

    removeCPU(): void {
        this.cpuSelected = null!;
        this.cpuSelectedChanged.next(this.cpuSelected);
    }

    getCPU(): Processor {
        return this.cpuSelected;
    }

    addCooler(cooler: Cooler): void {
        this.coolerSelected = cooler;
        this.coolerSelectedChanged.next(this.coolerSelected);
    }

    removeCooler(): void {
        this.coolerSelected = null!;
        this.coolerSelectedChanged.next(this.coolerSelected);
    }

    getCooler(): Cooler {
        return this.coolerSelected;
    }

    addMotherboard(motherboard: Motherboard): void {
        this.motherboardSelected = motherboard;
        this.motherboardSelectedChanged.next(this.motherboardSelected);
    }

    removeMotherboard(): void {
        this.motherboardSelected = null!;
        this.motherboardSelectedChanged.next(this.motherboardSelected);
    }

    getMotherboard(): Motherboard {
        return this.motherboardSelected;
    }

    addMemory(memory: Memory): void {
        this.memorySelected = memory;
        this.memorySelectedChanged.next(this.memorySelected);
    }

    removeMemory(): void {
        this.memorySelected = null!;
        this.memorySelectedChanged.next(this.memorySelected);
    }

    getMemory(): Memory {
        return this.memorySelected;
    }

    addStorage(storage: Storage): void {
        this.storageSelected = storage;
        this.storageSelectedChanged.next(this.storageSelected);
    }

    removeStorage(): void {
        this.storageSelected = null!;
        this.storageSelectedChanged.next(this.storageSelected);
    }

    getStorage(): Storage {
        return this.storageSelected;
    }

    addGraphicsCard(graphicsCard: GraphicsCard): void {
        this.graphicsCardSelected = graphicsCard;
        this.graphicsCardSelectedChanged.next(this.graphicsCardSelected);
    }

    removeGraphicsCard(): void {
        this.graphicsCardSelected = null!;
        this.graphicsCardSelectedChanged.next(this.graphicsCardSelected);
    }

    getGraphicsCard(): GraphicsCard {
        return this.graphicsCardSelected;
    }

    addCabinate(cabinate: Cabinate): void {
        this.cabinateSelected = cabinate;
        this.cabinateSelectedChanged.next(this.cabinateSelected);
    }

    removeCabinate(): void {
        this.cabinateSelected = null!;
        this.cabinateSelectedChanged.next(this.cabinateSelected);
    }

    getCabinate(): Cabinate {
        return this.cabinateSelected;
    }

    addPowerSupply(powerSupply: PowerSupply): void {
        this.powerSupplySelected = powerSupply;
        this.powerSupplySelectedChanged.next(this.powerSupplySelected);
    }

    removePowerSupply(): void {
        this.powerSupplySelected = null!;
        this.powerSupplySelectedChanged.next(this.powerSupplySelected);
    }

    getPowerSupply(): PowerSupply {
        return this.powerSupplySelected;
    }
}
