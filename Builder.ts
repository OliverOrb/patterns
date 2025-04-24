class Shawarma {
    constructor(
        public wrap: string,
        public meat: string,
        public tarator?: boolean,
        public salad?: boolean
    ) {}
}

class ShawarmaBuilder {
    private wrap: string = 'lavash';
    private meat: string = 'lamb';
    private tarator: boolean = false;
    private salad: boolean = false;

    setWrap(wrap: string): ShawarmaBuilder {
        this.wrap = wrap;
        return this;
    }

    setMeat(meat: string): ShawarmaBuilder {
        this.meat = meat;
        return this;
    }

    addTarator(): ShawarmaBuilder {
        this.tarator = true;
        return this;
    }

    addSalad(): ShawarmaBuilder {
        this.salad = true;
        return this;
    }

    build(): Shawarma {
        return new Shawarma(this.wrap, this.meat, this.tarator, this.salad);
    }
}

// Použití
const burger = new ShawarmaBuilder()
    .setWrap('cheese')
    .addTarator()
    .addSalad()
