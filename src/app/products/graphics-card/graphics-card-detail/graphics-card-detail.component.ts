import { Component, OnInit } from '@angular/core';
import { GraphicsCard } from '../graphics-card.model';

@Component({
    selector: 'app-graphics-card-detail',
    templateUrl: './graphics-card-detail.component.html',
    styleUrls: ['./graphics-card-detail.component.scss'],
})
export class GraphicsCardDetailComponent implements OnInit {
    graphicsCard: GraphicsCard = new GraphicsCard(
        'NVIDIA',
        'NVIDIA GeForce RTX',
        'NVIDIA GeForce RTX 3070 8 GB Founders Edition',
        'GeForce RTX 3070',
        8,
        'GDDR6',
        1500,
        1725,
        1750,
        'PCIe x16',
        'G-Sync',
        220,
        242,
        0,
        1,
        0,
        3,
        0,
        2,
        '2 Fans',
        '1 PCIe 12-pin',
        'https://images.nvidia.com/aem-dam/Solutions/geforce/ampere/rtx-3070/geforce-rtx-3070-product-gallery-full-screen-3840-1.jpg',
        44500
    );

    constructor() {}

    ngOnInit(): void {}
}
