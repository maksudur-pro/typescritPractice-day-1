{
  // Abstraction in OOP 2 vabe kora jai 1. interface 2. abstract

  //idea

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   const vehicle1: Vehicle1 = {
  //     name: "TOYOTa",
  //     model: 2510,
  //   };

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("starting");
    }
    stopEngine(): void {
      console.log("Stoping");
    }
    move(): void {
      console.log("moving");
    }
    test() {
      console.log("testing");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  // abstract class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("testing");
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("starting");
    }
    stopEngine(): void {
      console.log("Stoping");
    }
    move(): void {
      console.log("moving");
    }
  }

  const hondaCar = new ToyotaCar();
  hondaCar.startEngine();

  //
}
