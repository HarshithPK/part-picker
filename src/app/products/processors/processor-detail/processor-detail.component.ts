import { Component, OnInit } from '@angular/core';
import { Processor } from '../processor.model';

@Component({
    selector: 'app-processor-detail',
    templateUrl: './processor-detail.component.html',
    styleUrls: ['./processor-detail.component.scss'],
})
export class ProcessorDetailComponent implements OnInit {
    processor: Processor = new Processor(
        'AMD',
        'Amd Ryzen 5 3600',
        'Ryzen 5',
        6,
        12,
        'AM 4',
        3.6,
        4.2,
        65,
        'None',
        'Yes',
        'Zen 2',
        32,
        7,
        'https://www.amd.com/system/files/styles/992px/private/2019-06/238593-ryzen-5-pib-left-facing-1260x709.png?itok=umdtyaSy',
        17690
    );

    constructor() {}

    ngOnInit(): void {}
}
