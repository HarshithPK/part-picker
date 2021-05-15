import { Component, OnInit } from '@angular/core';

import { Processor } from './processor.model';

@Component({
    selector: 'app-processors',
    templateUrl: './processors.component.html',
    styleUrls: ['./processors.component.scss'],
})
export class ProcessorsComponent implements OnInit {
    processors: Processor[] = [
        new Processor(
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
        ),
        new Processor(
            'Intel',
            'Intel Core i5-11600',
            'Core i5',
            6,
            12,
            'LGA 1200',
            2.8,
            4.8,
            65,
            'Intel UHD Graphics 750',
            'Yes',
            'Rocket Lake',
            12,
            14,
            'https://sm.pcmag.com/t/pcmag_in/review/i/intel-core/intel-core-i5-11600k_esmw.1920.jpg',
            24000
        ),

        new Processor(
            'AMD',
            'AMD Ryzen 9 5950X',
            'Ryzen 9',
            16,
            32,
            'AM4',
            3.4,
            4.9,
            105,
            'None',
            'Yes',
            'Zen 3',
            64,
            7,
            'https://www.amd.com/system/files/styles/992px/private/2020-09/616656-amd-ryzen-9-5000-series-PIB-1260x709_0.png?itok=Wj2ScmBq',
            76000
        ),
    ];

    constructor() {}

    ngOnInit(): void {}
}
