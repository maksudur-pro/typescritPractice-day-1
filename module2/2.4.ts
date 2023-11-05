{
  //

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

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "joy",
    computer: {
      brand: "HP",
      model: "X-23u73",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "oled",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface YamahaBike {
    model: string;
    version: number;
  }

  const reachDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "radil",
    computer: {
      brand: "ASUS",
      model: "X-23u73",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Apple",
      model: "something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "yamaha",
      version: 2020,
    },
  };

  //
}
