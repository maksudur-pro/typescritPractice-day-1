{
  //

  // Abstraction --> dui vabe kora jai 1.inteface 2. abstract

  //   interface Vehicle1 {
  //     name: string;
  //     model: number;
  //   }

  //   const vehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model: 200,
  //   };
  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`i am stopping the car engine`);
    }

    move(): void {
      console.log(`i am moving the car engine`);
    }
    test() {
      console.log(`i am testing`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();
  toyotaCar.stopEngine();
  toyotaCar.move();
  toyotaCar.test();

  // abstract class --> leader type unare sobai follow korte parbo but er vitor theke ber hoya jabe na

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`i am testing`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`i am stopping the car engine`);
    }

    move(): void {
      console.log(`i am moving the car engine`);
    }
  }

  const hondaCar = new ToyotaCar();
  hondaCar.startEngine();
  hondaCar.stopEngine();
  hondaCar.move();

  //
}
