import { Component, OnInit } from '@angular/core';

import { Memory } from '../momery.model';
import { MemoryService } from '../memory.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
    selector: 'app-memory-start',
    templateUrl: './memory-start.component.html',
    styleUrls: ['./memory-start.component.scss'],
})
export class MemoryStartComponent implements OnInit {
    memory: Memory[] = null!;

    constructor(
        private memorySeervice: MemoryService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.memory = this.memorySeervice.getMemory();
    }

    storeMemory(): void {
        this.dataStorageService.storeMemory();
    }

    loadMemory(): void {
        this.dataStorageService.fetchMemory();
    }
}
