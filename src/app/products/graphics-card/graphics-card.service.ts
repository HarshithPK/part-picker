import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { GraphicsCard } from './graphics-card.model';

@Injectable({ providedIn: 'root' })
export class GraphicsCardService {
    graphicsCardsChanged = new Subject<GraphicsCard[]>();
    activeGraphicsCardsChanged = new Subject<GraphicsCard[]>();

    private graphicsCards: GraphicsCard[] = [];
    private activeGraphicsCards: GraphicsCard[] = [];
    private manufacturerNames: string[] = [];

    constructor() {}

    setGraphicsCards(graphicsCards: GraphicsCard[]) {
        this.graphicsCards = graphicsCards;
        this.activeGraphicsCards = graphicsCards.sort(
            (a, b) => a.price - b.price
        );

        this.setManufacturerNames();

        this.graphicsCardsChanged.next(this.graphicsCards.slice());
        this.activeGraphicsCardsChanged.next(this.activeGraphicsCards.slice());
    }

    getGraphicsCards(): GraphicsCard[] {
        return this.graphicsCards.slice();
    }

    setManufacturerNames() {
        this.graphicsCards.forEach((graphicsCard) => {
            this.manufacturerNames.push(graphicsCard.manufacturer);
        });

        this.manufacturerNames = this.removeDuplicates(this.manufacturerNames);
        this.manufacturerNames = this.manufacturerNames.sort();
    }

    getManufacturerNames(): string[] {
        return this.manufacturerNames.slice();
    }

    removeDuplicates(data: string[]) {
        return [...new Set(data)];
    }

    getGraphicsCard(index: number): GraphicsCard {
        return this.activeGraphicsCards[index];
    }

    applyAllFilters(
        manufacturerCheckboxes: string[],
        chipsetCheckboxes: string[],
        interfaceCheckboxes: string[],
        frameSyncCheckboxes: string[],
        externalPowerCheckboxes: string[],
        priceMin: number,
        priceMax: number,
        memorySize: number,
        coreClock: number,
        boostClock: number,
        length: number,
        tdp: number,
        dviPorts: number,
        hdmiPorts: number,
        miniHdmiPorts: number,
        displayPortPorts: number,
        miniDisplayPortPorts: number,
        slotWidth: number
    ): GraphicsCard[] {
        this.activeGraphicsCards = this.applyPriceFilter(priceMin, priceMax);

        this.activeGraphicsCards = this.applyMemorySizeFilter(memorySize);

        this.activeGraphicsCards = this.applyCoreClockFilter(coreClock);

        this.activeGraphicsCards = this.applyBoostClockFilter(boostClock);

        this.activeGraphicsCards = this.applyLengthFilter(length);

        this.activeGraphicsCards = this.applyTDPFilter(tdp);

        this.activeGraphicsCards = this.applyManufacturerFilter(
            manufacturerCheckboxes
        );

        this.activeGraphicsCards = this.applyChipsetFilter(chipsetCheckboxes);

        this.activeGraphicsCards =
            this.applyInterfaceFilter(interfaceCheckboxes);

        this.activeGraphicsCards =
            this.applyFrameSyncFilter(frameSyncCheckboxes);

        this.activeGraphicsCards = this.applyExternalPowerFilter(
            externalPowerCheckboxes
        );

        this.activeGraphicsCards = this.applyDVIPortsFilter(dviPorts);

        this.activeGraphicsCards = this.applyHDMIPortsFilter(hdmiPorts);

        this.activeGraphicsCards = this.applyMiniHDMIPortsFilter(miniHdmiPorts);

        this.activeGraphicsCards =
            this.applyDisplayportPortsFilter(displayPortPorts);

        this.activeGraphicsCards =
            this.applyMiniDisplayportPortsFilter(miniDisplayPortPorts);

        this.activeGraphicsCards = this.applySlotWidthFilter(slotWidth);

        return this.activeGraphicsCards.slice();
    }

    applyPriceFilter(priceMin: number, priceMax: number): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        this.graphicsCards.forEach((graphicsCard) => {
            if (
                graphicsCard.price >= priceMin &&
                graphicsCard.price <= priceMax
            )
                newGraphicsCardArray.push(graphicsCard);
        });
        return newGraphicsCardArray;
    }

    applyMemorySizeFilter(memorySize: number): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        this.activeGraphicsCards.forEach((graphicsCard) => {
            if (graphicsCard.memory >= memorySize)
                newGraphicsCardArray.push(graphicsCard);
        });
        return newGraphicsCardArray;
    }

    applyCoreClockFilter(coreClock: number): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        this.activeGraphicsCards.forEach((graphicsCard) => {
            if (graphicsCard.coreClock >= coreClock)
                newGraphicsCardArray.push(graphicsCard);
        });
        return newGraphicsCardArray;
    }

    applyBoostClockFilter(boostClock: number): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        this.activeGraphicsCards.forEach((graphicsCard) => {
            if (graphicsCard.boostClock >= boostClock)
                newGraphicsCardArray.push(graphicsCard);
        });
        return newGraphicsCardArray;
    }

    applyLengthFilter(length: number): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        this.activeGraphicsCards.forEach((graphicsCard) => {
            if (graphicsCard.length >= length)
                newGraphicsCardArray.push(graphicsCard);
        });
        return newGraphicsCardArray;
    }

    applyTDPFilter(tdp: number): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        this.activeGraphicsCards.forEach((graphicsCard) => {
            if (graphicsCard.TDP >= tdp)
                newGraphicsCardArray.push(graphicsCard);
        });
        return newGraphicsCardArray;
    }

    applyManufacturerFilter(manufacturerCheckboxes: string[]): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        if (manufacturerCheckboxes.length === 0) {
            return this.activeGraphicsCards;
        } else {
            this.activeGraphicsCards.forEach((graphicsCard) => {
                manufacturerCheckboxes.forEach((manufacturer) => {
                    if (graphicsCard.manufacturer === manufacturer)
                        newGraphicsCardArray.push(graphicsCard);
                });
            });
            return newGraphicsCardArray;
        }
    }

    applyChipsetFilter(chipsetCheckboxes: string[]) {
        let newGraphicsCardArray: GraphicsCard[] = [];

        if (chipsetCheckboxes.length === 0) {
            return this.activeGraphicsCards;
        } else {
            this.activeGraphicsCards.forEach((graphicsCard) => {
                chipsetCheckboxes.forEach((chipset) => {
                    if (graphicsCard.chipset === chipset)
                        newGraphicsCardArray.push(graphicsCard);
                });
            });
            return newGraphicsCardArray;
        }
    }

    applyInterfaceFilter(interfaceCheckboxes: string[]): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        if (interfaceCheckboxes.length === 0) {
            return this.activeGraphicsCards;
        } else {
            this.activeGraphicsCards.forEach((graphicsCard) => {
                interfaceCheckboxes.forEach((cardInterface) => {
                    if (graphicsCard.cardInterface === cardInterface)
                        newGraphicsCardArray.push(graphicsCard);
                });
            });
            return newGraphicsCardArray;
        }
    }

    applyFrameSyncFilter(frameSyncCheckboxes: string[]): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        if (frameSyncCheckboxes.length === 0) {
            return this.activeGraphicsCards;
        } else {
            this.activeGraphicsCards.forEach((graphicsCard) => {
                frameSyncCheckboxes.forEach((frameSync) => {
                    if (graphicsCard.frameSync === frameSync)
                        newGraphicsCardArray.push(graphicsCard);
                });
            });
            return newGraphicsCardArray;
        }
    }

    applyExternalPowerFilter(
        externalPowerCheckboxes: string[]
    ): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        if (externalPowerCheckboxes.length === 0) {
            return this.activeGraphicsCards;
        } else {
            this.activeGraphicsCards.forEach((graphicsCard) => {
                externalPowerCheckboxes.forEach((externalPower) => {
                    if (graphicsCard.externalPower === externalPower)
                        newGraphicsCardArray.push(graphicsCard);
                });
            });
            return newGraphicsCardArray;
        }
    }

    applyDVIPortsFilter(dviPorts: number): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        this.activeGraphicsCards.forEach((graphicsCard) => {
            if (graphicsCard.DVIPorts >= dviPorts)
                newGraphicsCardArray.push(graphicsCard);
        });
        return newGraphicsCardArray;
    }

    applyHDMIPortsFilter(hdmiPorts: number): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        this.activeGraphicsCards.forEach((graphicsCard) => {
            if (graphicsCard.HDMIPorts >= hdmiPorts)
                newGraphicsCardArray.push(graphicsCard);
        });
        return newGraphicsCardArray;
    }

    applyMiniHDMIPortsFilter(miniHdmiPorts: number): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        this.activeGraphicsCards.forEach((graphicsCard) => {
            if (graphicsCard.MiniHDMIPorts >= miniHdmiPorts)
                newGraphicsCardArray.push(graphicsCard);
        });
        return newGraphicsCardArray;
    }

    applyDisplayportPortsFilter(displayPortPorts: number): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        this.activeGraphicsCards.forEach((graphicsCard) => {
            if (graphicsCard.DisplayPortPorts >= displayPortPorts)
                newGraphicsCardArray.push(graphicsCard);
        });
        return newGraphicsCardArray;
    }

    applyMiniDisplayportPortsFilter(
        miniDisplayPortPorts: number
    ): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        this.activeGraphicsCards.forEach((graphicsCard) => {
            if (graphicsCard.MiniDisplayPortPorts >= miniDisplayPortPorts)
                newGraphicsCardArray.push(graphicsCard);
        });
        return newGraphicsCardArray;
    }

    applySlotWidthFilter(slotWidth: number): GraphicsCard[] {
        let newGraphicsCardArray: GraphicsCard[] = [];

        this.activeGraphicsCards.forEach((graphicsCard) => {
            if (graphicsCard.slotWidth >= slotWidth)
                newGraphicsCardArray.push(graphicsCard);
        });
        return newGraphicsCardArray;
    }
}
