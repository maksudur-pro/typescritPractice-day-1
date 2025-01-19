{
  // oop - Class and object

  //   class Animal {
  //     public name: string;
  //     public species: string;
  //     public sound: string;

  //     constructor(name: string, species: string, sound: string) {
  //       this.name = name;
  //       this.species = species;
  //       this.sound = sound;
  //     }

  //     makeSound() {
  //       console.log(`the ${this.name} says ${this.sound}`);
  //     }
  //   }
  class Animal {
    // parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
  const cat = new Animal("Persian bhai", "cat", "meaw meaw");
  cat.makeSound();
  dog.makeSound();

  //
}
