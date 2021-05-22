import { Component, OnInit } from '@angular/core';

import { MotherboardService } from './motherboard.service';

@Component({
    selector: 'app-motherboards',
    templateUrl: './motherboards.component.html',
    styleUrls: ['./motherboards.component.scss'],
    providers: [MotherboardService],
})
export class MotherboardsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
