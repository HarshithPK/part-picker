import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Memory } from '../momery.model';
import { MemoryService } from '../memory.service';

@Component({
    selector: 'app-memory-start',
    templateUrl: './memory-start.component.html',
    styleUrls: ['./memory-start.component.scss'],
})
export class MemoryStartComponent implements OnInit {
    memory!: Memory[];

    constructor(private memorySeervice: MemoryService, private http: HttpClient) {}

    ngOnInit(): void {
        const url = 'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/memory.json';
        this.http.get<Memory[]>(url).subscribe(memory => {
            this.memory = memory;
        })
    }

    storeMemory(): void {
        this.memorySeervice.storeMemory();
    }

    loadMemory(): void {}
}
