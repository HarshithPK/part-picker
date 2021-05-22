import { Component, OnInit } from '@angular/core';

import { StorageService } from './storage.service';

@Component({
    selector: 'app-storage',
    templateUrl: './storage.component.html',
    styleUrls: ['./storage.component.scss'],
    providers: [StorageService],
})
export class StorageComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
