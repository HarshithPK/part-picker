import { Component, OnInit } from '@angular/core';

import { Memory } from '../momery.model';
import { MemoryService } from '../memory.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router } from '@angular/router';
import { BuildSystemService } from 'src/app/build-system/build-system.service';

@Component({
    selector: 'app-memory-start',
    templateUrl: './memory-start.component.html',
    styleUrls: ['./memory-start.component.scss'],
})
export class MemoryStartComponent implements OnInit {
    memory: Memory[] = null!;

    constructor(
        private memorySeervice: MemoryService,
        private dataStorageService: DataStorageService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.memory = this.memorySeervice.getMemory();
    }

    addRAM(index: number): void {
        const ram = this.memorySeervice.getRAM(index);
        this.buildSystemService.addMemory(ram);
        this.router.navigate(['/build-system']);
    }

    storeMemory(): void {
        // this.dataStorageService.storeMemory();
    }

    loadMemory(): void {
        this.dataStorageService.fetchMemory();
    }
}
