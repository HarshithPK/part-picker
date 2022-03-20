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
    cpuSelectedSocket: string = '';

    private coolerSelected: Cooler = null!;
    coolerSelectedChanged = new Subject<Cooler>();
    coolerSelectedHeight: number = null!;
    coolerSelectedSocketCompatability: string[] = [];

    private motherboardSelected: Motherboard = null!;
    motherboardSelectedChanged = new Subject<Motherboard>();
    motherboardSelectedMemoryType: string = '';

    private memorySelected: Memory = null!;
    memorySelectedChanged = new Subject<Memory>();
    memorySelectedMemoryType: string = '';

    private storageSelected: Storage = null!;
    storageSelectedChanged = new Subject<Storage>();

    private graphicsCardSelected: GraphicsCard = null!;
    graphicsCardSelectedChanged = new Subject<GraphicsCard>();
    gpuSelectedLength: number = null!;

    private powerSupplySelected: PowerSupply = null!;
    powerSupplySelectedChanged = new Subject<PowerSupply>();
    powerSupplySelectedLength: number = null!;

    private cabinateSelected: Cabinate = null!;
    cabinateSelectedChanged = new Subject<Cabinate>();
    cabinateSelectedCPULength: number = null!;
    cabinateSelectedPSULength: number = null!;
    cabinateSelectedGPULength: number = null!;

    addCPU(cpu: Processor): void {
        this.cpuSelected = cpu;
        this.cpuSelectedChanged.next(this.cpuSelected);
        this.cpuSelectedSocket = this.cpuSelected.socket;
    }

    removeCPU(): void {
        this.cpuSelected = null!;
        this.cpuSelectedChanged.next(this.cpuSelected);
        this.cpuSelectedSocket = '';
    }

    getCPU(): Processor {
        return this.cpuSelected;
    }

    addCooler(cooler: Cooler): void {
        this.coolerSelected = cooler;
        this.coolerSelectedChanged.next(this.coolerSelected);
        this.coolerSelectedHeight = this.coolerSelected.heightWithFan;
        this.coolerSelectedSocketCompatability =
            this.coolerSelected.socketCompatability;
    }

    removeCooler(): void {
        this.coolerSelected = null!;
        this.coolerSelectedChanged.next(this.coolerSelected);
        this.coolerSelectedHeight = null!;
    }

    getCooler(): Cooler {
        return this.coolerSelected;
    }

    addMotherboard(motherboard: Motherboard): void {
        this.motherboardSelected = motherboard;
        this.motherboardSelectedChanged.next(this.motherboardSelected);
        this.motherboardSelectedMemoryType =
            this.motherboardSelected.memoryType;
    }

    removeMotherboard(): void {
        this.motherboardSelected = null!;
        this.motherboardSelectedChanged.next(this.motherboardSelected);
        this.motherboardSelectedMemoryType = '';
    }

    getMotherboard(): Motherboard {
        return this.motherboardSelected;
    }

    addMemory(memory: Memory): void {
        this.memorySelected = memory;
        this.memorySelectedChanged.next(this.memorySelected);
        this.memorySelectedMemoryType = this.memorySelected.memoryType;
    }

    removeMemory(): void {
        this.memorySelected = null!;
        this.memorySelectedChanged.next(this.memorySelected);
        this.memorySelectedMemoryType = '';
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
        this.gpuSelectedLength = this.graphicsCardSelected.length;
    }

    removeGraphicsCard(): void {
        this.graphicsCardSelected = null!;
        this.graphicsCardSelectedChanged.next(this.graphicsCardSelected);
        this.gpuSelectedLength = null!;
    }

    getGraphicsCard(): GraphicsCard {
        return this.graphicsCardSelected;
    }

    addPowerSupply(powerSupply: PowerSupply): void {
        this.powerSupplySelected = powerSupply;
        this.powerSupplySelectedChanged.next(this.powerSupplySelected);
        this.powerSupplySelectedLength = this.powerSupplySelected.length;
    }

    removePowerSupply(): void {
        this.powerSupplySelected = null!;
        this.powerSupplySelectedChanged.next(this.powerSupplySelected);
        this.powerSupplySelectedLength = null!;
    }

    getPowerSupply(): PowerSupply {
        return this.powerSupplySelected;
    }

    addCabinate(cabinate: Cabinate): void {
        this.cabinateSelected = cabinate;
        this.cabinateSelectedChanged.next(this.cabinateSelected);
        this.cabinateSelectedCPULength = this.cabinateSelected.maxCPUClearance;
        this.cabinateSelectedPSULength = this.cabinateSelected.maxPSULength;
        this.cabinateSelectedGPULength = this.cabinateSelected.maxGPULength;
    }

    removeCabinate(): void {
        this.cabinateSelected = null!;
        this.cabinateSelectedChanged.next(this.cabinateSelected);
        this.cabinateSelectedCPULength = null!;
        this.cabinateSelectedPSULength = null!;
        this.cabinateSelectedGPULength = null!;
    }

    getCabinate(): Cabinate {
        return this.cabinateSelected;
    }
}
