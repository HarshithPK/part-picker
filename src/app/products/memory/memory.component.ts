import { Component, OnInit } from '@angular/core';

import { MemoryService } from './memory.service';

@Component({
    selector: 'app-memory',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.scss'],
    providers: [MemoryService],
})
export class MemoryComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
