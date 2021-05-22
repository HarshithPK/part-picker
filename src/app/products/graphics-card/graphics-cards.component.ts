import { Component, OnInit } from '@angular/core';

import { GraphicsCardService } from './graphics-card.service';

@Component({
    selector: 'app-graphics-card',
    templateUrl: './graphics-cards.component.html',
    styleUrls: ['./graphics-cards.component.scss'],
    providers: [GraphicsCardService],
})
export class GraphicsCardsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
