export class Memory {
    public manufacturer!: string;
    public series!: string;
    public name!: string;
    public color!: string;
    public memorySize!: number;
    public memoryType!: string;
    public speed!: number;
    public formFactor!: string;
    public casLatency!: number;
    public voltage!: number;
    public timing!: string;
    public modules!: string;
    public heatSpreader!: string;
    public ecc!: string;
    public imagePath!: string;
    public price!: number;

    constructor(
        manufacturer: string,
        series: string,
        name: string,
        color: string,
        memorySize: number,
        memoryType: string,
        speed: number,
        formFactor: string,
        casLatency: number,
        voltage: number,
        timing: string,
        modules: string,
        heatSpreader: string,
        ecc: string,
        imagePath: string,
        price: number
    ) {
        this.manufacturer = manufacturer;
        this.series = series;
        this.name = name;
        this.color = color;
        this.memorySize = memorySize;
        this.memoryType = memoryType;
        this.speed = speed;
        this.formFactor = formFactor;
        this.casLatency = casLatency;
        this.voltage = voltage;
        this.timing = timing;
        this.modules = modules;
        this.heatSpreader = heatSpreader;
        this.ecc = ecc;
        this.imagePath = imagePath;
        this.price = price;
    }
}
