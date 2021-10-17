import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

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

    storeProcessors(processors: Processor[]) {
        // const processors = this.processorService.getProcessors();
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/processors.json';

        this.http.put(url, processors).subscribe((response) => {
            console.log(response);
        });
    }

    fetchProcessors() {
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/processors.json';

        return this.http.get<Processor[]>(url).pipe(
            tap((processors) => {
                this.processorService.setProcessors(processors);
            })
        );
    }

    storeCabinates(cabinates: Cabinate[]) {
        // const cabinates = this.cabinateService.getCabinates();

        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/cabinates.json';

        this.http.put(url, cabinates).subscribe((response) => {
            console.log(response);
        });
    }

    fetchCabinates() {
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/cabinates.json';

        return this.http.get<Cabinate[]>(url).pipe(
            tap((cabinates) => {
                this.cabinateService.setCabinates(cabinates);
            })
        );
    }

    storeCoolers(coolers: Cooler[]) {
        // const coolers = this.coolerService.getCoolers();
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/coolers.json';

        this.http.put(url, coolers).subscribe((response) => {
            console.log(response);
        });
    }

    fetchCoolers() {
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/coolers.json';

        return this.http.get<Cooler[]>(url).pipe(
            tap((coolers) => {
                this.coolerService.setCoolers(coolers);
            })
        );
    }

    storeGraphicsCards(graphicsCards: GraphicsCard[]) {
        // const graphicsCards = this.graphicsCardService.getGraphicsCards();
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/graphicsCards.json';

        this.http.put(url, graphicsCards).subscribe((response) => {
            console.log(response);
        });
    }

    fetchGraphicsCards() {
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/graphicsCards.json';

        return this.http.get<GraphicsCard[]>(url).pipe(
            tap((graphicsCards) => {
                this.graphicsCardService.setGraphicsCards(graphicsCards);
            })
        );
    }

    storeMemory(memory: Memory[]) {
        // const memory = this.memoryService.getMemory();
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/memory.json';

        this.http.put(url, memory).subscribe((response) => {
            console.log(response);
        });
    }

    fetchMemory() {
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/memory.json';

        return this.http.get<Memory[]>(url).pipe(
            tap((memory) => {
                console.log(memory);
                this.memoryService.setMemory(memory);
            })
        );
    }

    storeMotherboards(motherboards: Motherboard[]) {
        // const motherboards = this.motherboardService.getMotherboards();
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/motherboards.json';

        this.http.put(url, motherboards).subscribe((response) => {
            console.log(response);
        });
    }

    fetchMotherboards() {
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/motherboards.json';

        return this.http.get<Motherboard[]>(url).pipe(
            tap((motherboards) => {
                this.motherboardService.setMotherboards(motherboards);
            })
        );
    }

    storePowerSupplies(powerSupplies: PowerSupply[]) {
        // const powerSupplies = this.powerSuplyService.getPowerSupplies();
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/powerSupplies.json';

        this.http.put(url, powerSupplies).subscribe((response) => {
            console.log(response);
        });
    }

    fetchPowerSupplies() {
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/powerSupplies.json';

        return this.http.get<PowerSupply[]>(url).pipe(
            tap((powerSupplies) => {
                this.powerSuplyService.setPowerSupplies(powerSupplies);
            })
        );
    }

    storeStorages(storages: Storage[]) {
        // const storages = this.storageService.getStorages();
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/storages.json';

        this.http.put(url, storages).subscribe((response) => {
            console.log(response);
        });
    }

    fetchStorages() {
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/storages.json';

        return this.http.get<Storage[]>(url).pipe(
            tap((storages) => {
                this.storageService.setStorages(storages);
            })
        );
    }
}
