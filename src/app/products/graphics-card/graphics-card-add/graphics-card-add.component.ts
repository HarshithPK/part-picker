import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { GraphicsCard } from '../graphics-card.model';
import { GraphicsCardService } from '../graphics-card.service';

@Component({
    selector: 'app-graphics-card-add',
    templateUrl: './graphics-card-add.component.html',
    styleUrls: ['./graphics-card-add.component.scss'],
})
export class GraphicsCardAddComponent implements OnInit {
    private graphicsCards: GraphicsCard[] = [];
    private graphicsCard!: GraphicsCard;

    constructor(
        private graphicsCardService: GraphicsCardService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.graphicsCards = this.graphicsCardService.getGraphicsCards();
    }

    onSubmit(form: NgForm) {
        this.graphicsCard = new GraphicsCard(
            form.value.manufacturer,
            form.value.series,
            form.value.name,
            form.value.chipset,
            form.value.memory,
            form.value.memoryType,
            form.value.coreClock,
            form.value.boostClock,
            form.value.effectiveMemoryClock,
            form.value.cardInterface,
            form.value.frameSync,
            form.value.tdp,
            form.value.length,
            form.value.DVIPorts,
            form.value.HDMIPorts,
            form.value.MiniHDMIPorts,
            form.value.DisplayPortPorts,
            form.value.MiniDisplayPortPorts,
            form.value.slotWidth,
            form.value.cooling,
            form.value.externalPower,
            form.value.imagePath,
            form.value.price
        );

        this.graphicsCards.push(this.graphicsCard);
        this.dataStorageService.storeGraphicsCards(this.graphicsCards);

        form.reset();
    }
}
