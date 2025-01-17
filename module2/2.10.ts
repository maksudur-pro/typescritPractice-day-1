{
  // Mapped types

  const arrOfNumbers: number[] = [1, 54, 5, 4];

  //   const arrOfStrings: string[] = [ '1', '54', '5', '4' ];

  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrOfStrings);

  type LocationNumber = {
    height: number;
    width: number;
  };

  //   obj['name']

  type Height = LocationNumber["height"]; // lookup type
  //   type LocationString = {
  //     height: string;
  //     width: string;
  //   }

  type LocationString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: LocationString<{ height: string; width: number }> = {
    height: "45",
    width: 474,
  };

  //
}
