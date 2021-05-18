export class Cooler {
    public manufacturer!: string;
    public series!: string;
    public name!: string;
    public fanRPMRange!: string;
    public heightWithoutFan!: number;
    public heightWithFan!: number;
    public acousticalNoiseLevel!: string;
    public socketCompatability!: string[];
    public color!: string;
    public waterCooled!: string;
    public fanless!: string;
    public imagePath!: string;
    public price!: number;

    constructor(
        manufacturer: string,
        series: string,
        name: string,
        fanRPMRange: string,
        heightWithoutFan: number,
        heightWithFan: number,
        acousticalNoiseLevel: string,
        socketCompatability: string[],
        color: string,
        waterCooled: string,
        fanless: string,
        imagePath: string,
        price: number
    ) {
        this.manufacturer = manufacturer;
        this.series = series;
        this.name = name;
        this.fanRPMRange = fanRPMRange;
        this.heightWithoutFan = heightWithoutFan;
        this.heightWithFan = heightWithFan;
        this.acousticalNoiseLevel = acousticalNoiseLevel;
        this.socketCompatability = socketCompatability;
        this.color = color;
        this.waterCooled = waterCooled;
        this.fanless = fanless;
        this.imagePath = imagePath;
        this.price = price;
    }
}
