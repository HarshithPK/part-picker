import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Cabinate } from '../products/cabinates/cabinate.model';
import { CabinateService } from '../products/cabinates/cabinate.service';
import { Cooler } from '../products/coolers/cooler.model';
import { CoolerService } from '../products/coolers/cooler.service';
import { GraphicsCard } from '../products/graphics-card/graphics-card.model';
import { GraphicsCardService } from '../products/graphics-card/graphics-card.service';
import { MemoryService } from '../products/memory/memory.service';
import { Memory } from '../products/memory/momery.model';
import { Motherboard } from '../products/motherboards/motherboard.model';
import { MotherboardService } from '../products/motherboards/motherboard.service';
import { PowerSupply } from '../products/power-supplies/power-supply.model';
import { PowerSupplyService } from '../products/power-supplies/power-supply.service';

import { Processor } from '../products/processors/processor.model';
import { ProcessorService } from '../products/processors/processor.service';
import { Storage } from '../products/storage/storage.model';
import { StorageService } from '../products/storage/storage.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private processorService: ProcessorService,
        private cabinateService: CabinateService,
        private coolerService: CoolerService,
        private graphicsCardService: GraphicsCardService,
        private memoryService: MemoryService,
        private motherboardService: MotherboardService,
        private powerSuplyService: PowerSupplyService,
        private storageService: StorageService
    ) {}

    storeProcessors() {
        const processors = this.processorService.getProcessors();

        this.http
            .put(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/processors.json',
                processors
            )
            .subscribe((response) => {
                console.log(response);
            });
    }

    fetchProcessors() {
        return this.http
            .get<Processor[]>(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/processors.json'
            )
            .pipe(
                tap((processors) => {
                    this.processorService.setProcessors(processors);
                })
            );
    }

    storeCabinates() {
        const cabinates = this.cabinateService.getCabinates();

        this.http
            .put(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/cabinates.json',
                cabinates
            )
            .subscribe((response) => {
                console.log(response);
            });
    }

    fetchCabinates() {
        return this.http
            .get<Cabinate[]>(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/cabinates.json'
            )
            .pipe(
                tap((cabinates) => {
                    this.cabinateService.setCabinates(cabinates);
                })
            );
    }

    storeCoolers() {
        const coolers = this.coolerService.getCoolers();

        this.http
            .put(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/coolers.json',
                coolers
            )
            .subscribe((response) => {
                console.log(response);
            });
    }

    fetchCoolers() {
        return this.http
            .get<Cooler[]>(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/coolers.json'
            )
            .pipe(
                tap((coolers) => {
                    this.coolerService.setCoolers(coolers);
                })
            );
    }

    storeGraphicsCards() {
        const graphicsCards = this.graphicsCardService.getGraphicsCards();

        this.http
            .put(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/graphicsCards.json',
                graphicsCards
            )
            .subscribe((response) => {
                console.log(response);
            });
    }

    fetchGraphicsCards() {
        return this.http
            .get<GraphicsCard[]>(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/graphicsCards.json'
            )
            .pipe(
                tap((graphicsCards) => {
                    this.graphicsCardService.setGraphicsCards(graphicsCards);
                })
            );
    }

    storeMemory() {
        const memory = this.memoryService.getMemory();

        this.http
            .put(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/memory.json',
                memory
            )
            .subscribe((response) => {
                console.log(response);
            });
    }

    fetchMemory() {
        return this.http
            .get<Memory[]>(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/memory.json'
            )
            .pipe(
                tap((memory) => {
                    this.memoryService.setMemory(memory);
                })
            );
    }

    storeMotherboards() {
        const motherboards = this.motherboardService.getMotherboards();

        this.http
            .put(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/motherboards.json',
                motherboards
            )
            .subscribe((response) => {
                console.log(response);
            });
    }

    fetchMotherboards() {
        return this.http
            .get<Motherboard[]>(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/motherboards.json'
            )
            .pipe(
                tap((motherboards) => {
                    this.motherboardService.setMotherboards(motherboards);
                })
            );
    }

    storePowerSupplies() {
        const powerSupplies = this.powerSuplyService.getPowerSupplies();

        this.http
            .put(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/powerSupplies.json',
                powerSupplies
            )
            .subscribe((response) => {
                console.log(response);
            });
    }

    fetchPowerSupplies() {
        return this.http
            .get<PowerSupply[]>(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/powerSupplies.json'
            )
            .pipe(
                tap((powerSupplies) => {
                    this.powerSuplyService.setPowerSupplies(powerSupplies);
                })
            );
    }

    storeStorages() {
        const storages = this.storageService.getStorages();

        this.http
            .put(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/storages.json',
                storages
            )
            .subscribe((response) => {
                console.log(response);
            });
    }

    fetchStorages() {
        return this.http
            .get<Storage[]>(
                'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/storages.json'
            )
            .pipe(
                tap((storages) => {
                    this.storageService.setStorages(storages);
                })
            );
    }
}
