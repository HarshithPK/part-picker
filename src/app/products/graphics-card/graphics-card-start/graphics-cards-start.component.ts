import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { GraphicsCard } from '../graphics-card.model';
import { GraphicsCardService } from '../graphics-card.service';

@Component({
    selector: 'app-graphics-card-start',
    templateUrl: './graphics-cards-start.component.html',
    styleUrls: ['./graphics-cards-start.component.scss'],
})
export class GraphicsCardsStartComponent implements OnInit {
    graphicsCards!: GraphicsCard[];

    constructor(private graphicsCardService: GraphicsCardService, private http: HttpClient) {}

    ngOnInit(): void {
        const url = 'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/graphicsCards.json';
        this.http.get<GraphicsCard[]>(url).subscribe(graphicsCards => {
            this.graphicsCards = graphicsCards;
        })
    }

    storeGraphicsCards(): void {
        this.graphicsCardService.storeGraphicsCards();
    }

    loadGraphicsCards(): void {}
}
