import { Component, OnInit } from '@angular/core';

import { CoolerService } from './cooler.service';

@Component({
    selector: 'app-coolers',
    templateUrl: './coolers.component.html',
    styleUrls: ['./coolers.component.scss'],
    providers: [CoolerService],
})
export class CoolersComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
