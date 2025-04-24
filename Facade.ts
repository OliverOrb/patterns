class CPU {
    freeze() {
        console.log("CPU freeze");
    }

    execute() {
        console.log("CPU execute");
    }
}

class Memory {
    load(position: number, data: string) {
        console.log(`Memory load ${data} at ${position}`);
    }
}

class Camera {
    read(start: number, size: number): string {
        return `Data from ${start} to ${start + size}`;
    }
}

// Fasáda
class Smartphone {
    private cpu = new CPU();
    private memory = new Memory();
    private camera = new Camera();

    startSmartphone() {
        this.cpu.freeze();
        const data = this.camera.read(0, 100);
        this.memory.load(0, data);
        this.cpu.execute();
    }
}

// Použití
const smartphone = new Smartphone();
smartphone.startSmartphone();