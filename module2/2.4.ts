{
  // Generic with Interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type PoorWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<PoorWatch> = {
    name: "Joy",
    computer: {
      brand: "HP",
      model: "XY",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "EX",
      model: "kw66",
      display: "Oled",
    },
  };

  interface RichWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<RichWatch, YamahaBike> = {
    name: "Saif",
    computer: {
      brand: "apple",
      model: "XY",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "apple",
      model: "kw66",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
