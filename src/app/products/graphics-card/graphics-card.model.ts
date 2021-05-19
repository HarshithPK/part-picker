export class GraphicsCard {
    public manufacturer!: string;
    public series!: string;
    public name!: string;
    public chipset!: string;
    public memory!: number;
    public memoryType!: string;
    public coreClock!: number;
    public boostClock!: number;
    public effectiveMemoryClock!: number;
    public cardInterface!: string;
    public frameSync!: string;
    public TDP!: number;
    public length!: number;
    public DVIPorts!: number;
    public HDMIPorts!: number;
    public MiniHDMIPorts!: number;
    public DisplayPortPorts!: number;
    public MiniDisplayPortPorts!: number;
    public slotWidth!: number;
    public cooling!: string;
    public externalPower!: string;
    public imagePath!: string;
    public price!: number;

    constructor(
        manufacturer: string,
        series: string,
        name: string,
        chipset: string,
        memory: number,
        memoryType: string,
        coreClock: number,
        boostClock: number,
        effectiveMemoryClock: number,
        cardInterface: string,
        frameSync: string,
        TDP: number,
        length: number,
        DVIPorts: number,
        HDMIPorts: number,
        MiniHDMIPorts: number,
        DisplayPortPorts: number,
        MiniDisplayPortPorts: number,
        slotWidth: number,
        cooling: string,
        externalPower: string,
        imagePath: string,
        price: number
    ) {
        this.manufacturer = manufacturer;
        this.series = series;
        this.name = name;
        this.chipset = chipset;
        this.memory = memory;
        this.memoryType = memoryType;
        this.coreClock = coreClock;
        this.boostClock = boostClock;
        this.effectiveMemoryClock = effectiveMemoryClock;
        this.cardInterface = cardInterface;
        this.frameSync = frameSync;
        this.TDP = TDP;
        this.length = length;
        this.DVIPorts = DVIPorts;
        this.HDMIPorts = HDMIPorts;
        this.MiniHDMIPorts = MiniHDMIPorts;
        this.DisplayPortPorts = DisplayPortPorts;
        this.MiniDisplayPortPorts = MiniDisplayPortPorts;
        this.slotWidth = slotWidth;
        this.cooling = cooling;
        this.externalPower = externalPower;
        this.imagePath = imagePath;
        this.price = price;
    }
}
