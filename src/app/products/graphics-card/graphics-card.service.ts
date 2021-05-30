import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { GraphicsCard } from './graphics-card.model';

@Injectable({ providedIn: 'root' })
export class GraphicsCardService {
    graphicsCardsChanged = new Subject<GraphicsCard[]>();

    // graphicsCards: GraphicsCard[] = [
    //     new GraphicsCard(
    //         'NVIDIA',
    //         'NVIDIA GeForce RTX',
    //         'NVIDIA GeForce RTX 3070 8 GB Founders Edition',
    //         'GeForce RTX 3070',
    //         8,
    //         'GDDR6',
    //         1500,
    //         1725,
    //         16000,
    //         'PCIe x16',
    //         'G-Sync',
    //         220,
    //         242,
    //         0,
    //         1,
    //         0,
    //         3,
    //         0,
    //         2,
    //         '2 Fans',
    //         '1 PCIe 12-pin',
    //         'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3070/geforce-rtx-3070-product-gallery-full-screen-3840-2.jpg',
    //         44500
    //     ),
    //     new GraphicsCard(
    //         'GIGABYTE',
    //         'Gigabyte AORUS MASTER',
    //         'Gigabyte Radeon RX 6900 XT 16 GB AORUS MASTER',
    //         'Radeon RX 6900 XT',
    //         16,
    //         'GDDR6',
    //         2015,
    //         2365,
    //         16000,
    //         'PCIe x16',
    //         'FreeSync',
    //         300,
    //         322,
    //         0,
    //         2,
    //         0,
    //         2,
    //         0,
    //         2,
    //         '3 Fans',
    //         '3 PCIe 8-pin',
    //         'https://www.gigabyte.com/FileUpload/Global/WebPage/760/img/5.png',
    //         94400
    //     ),
    //     new GraphicsCard(
    //         'ASUS',
    //         'Asus ROG STRIX',
    //         'Asus GeForce RTX 3090 24 GB STRIX GAMING OC',
    //         'GeForce RTX 3090',
    //         24,
    //         'GDDR6X',
    //         1400,
    //         1890,
    //         19500,
    //         'PCIe x16',
    //         'G-Sync',
    //         350,
    //         319,
    //         0,
    //         2,
    //         0,
    //         3,
    //         0,
    //         3,
    //         '3 Fans',
    //         '3 PCIe 8-pin',
    //         'https://dlcdnwebimgs.asus.com/gain/69470DB4-597A-497D-9F5E-B29C1CB998BE/w1000/h732',
    //         265900
    //     ),
    // ];

    graphicsCards: GraphicsCard[] = [];

    constructor() {}

    setGraphicsCards(graphicsCards: GraphicsCard[]) {
        this.graphicsCards = graphicsCards;
        this.graphicsCardsChanged.next(this.graphicsCards.slice());
    }

    getGraphicsCards(): GraphicsCard[] {
        return this.graphicsCards.slice();
    }

    getGraphicsCard(index: number): GraphicsCard {
        return this.graphicsCards[index];
    }
}
