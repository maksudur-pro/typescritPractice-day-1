{
  //

  // mapped type

  const arrayOfNumbers: number[] = [1, 2, 3];

  //   const arrayOfStrings: string[] = ["1", "2", "3"];

  const arrayOfStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrayOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // look up type

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "222",
    width: 22,
  };

  //
}
