export class Cabinate {
    public manufacturer!: string;
    public series!: string;
    public name!: string;
    public type!: string;
    public powerSupply!: string;
    public color!: string;
    public dimensions!: string;
    public IOPorts!: string;
    public motherboardSupport!: string;
    public sidePanel!: string;
    public material!: string;
    public maxPSULength!: number;
    public maxGPULength!: number;
    public maxCPUClearance!: number;
    public fanSupport!: string;
    public dustFilters!: string;
    public imagePath!: string;
    public price!: number;

    constructor(
        manufacturer: string,
        series: string,
        name: string,
        type: string,
        powerSupply: string,
        color: string,
        dimensions: string,
        IOPorts: string,
        motherboardSupport: string,
        sidePanel: string,
        material: string,
        maxPSULength: number,
        maxGPULength: number,
        maxCPUClearance: number,
        fanSupport: string,
        dustFilters: string,
        imagePath: string,
        price: number
    ) {
        this.manufacturer = manufacturer;
        this.series = series;
        this.name = name;
        this.type = type;
        this.powerSupply = powerSupply;
        this.color = color;
        this.dimensions = dimensions;
        this.IOPorts = IOPorts;
        this.motherboardSupport = motherboardSupport;
        this.sidePanel = sidePanel;
        this.material = material;
        this.maxPSULength = maxPSULength;
        this.maxGPULength = maxGPULength;
        this.maxCPUClearance = maxCPUClearance;
        this.fanSupport = fanSupport;
        this.dustFilters = dustFilters;
        this.imagePath = imagePath;
        this.price = price;
    }
}
