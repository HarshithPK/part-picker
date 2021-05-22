import { Component, OnInit } from '@angular/core';

import { ProcessorService } from './processor.service';

@Component({
    selector: 'app-processors',
    templateUrl: './processors.component.html',
    styleUrls: ['./processors.component.scss'],
    providers: [ProcessorService],
})
export class ProcessorsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
