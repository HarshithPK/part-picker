export class Processor {
    public manufacturer!: string;
    public series!: string;
    public name!: string;
    public cores!: number;
    public threads!: number;
    public socket!: string;
    public baseClock!: number;
    public boostClock!: number;
    public tdp!: number;
    public integratedGraphics!: string;
    public smt!: string;
    public architecture!: string;
    public cache!: number;
    public lithograaphy!: number;
    public imagePath!: string;
    public price!: number;

    constructor(
        manufacturer: string,
        name: string,
        series: string,
        cores: number,
        threads: number,
        socket: string,
        baseClock: number,
        boostClock: number,
        tdp: number,
        integratedGraphics: string,
        smt: string,
        architecture: string,
        cache: number,
        lithograaphy: number,
        imagePath: string,
        price: number
    ) {
        this.manufacturer = manufacturer;
        this.name = name;
        this.series = series;
        this.cores = cores;
        this.threads = threads;
        this.socket = socket;
        this.baseClock = baseClock;
        this.boostClock = boostClock;
        this.tdp = tdp;
        this.integratedGraphics = integratedGraphics;
        this.smt = smt;
        this.architecture = architecture;
        this.cache = cache;
        this.lithograaphy = lithograaphy;
        this.imagePath = imagePath;
        this.price = price;
    }
}
