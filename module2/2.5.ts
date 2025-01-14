{
  // Function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayGeneric = <T>(param: T): T[] => {
    return [param];
  };

  interface User {
    id: number;
    name: string;
  }

  const res1 = createArray("BD");
  const resGeneric = createArrayGeneric<string>("BD");
  const resGenericObj = createArrayGeneric<User>({
    id: 63,
    name: "Joy",
  });

  const createArrayWithTuple = <T, O>(param1: T, param2: O): [T, O] => {
    return [param1, param2];
  };

  interface User {
    id: number;
    name: string;
  }

  const res3 = createArrayWithTuple<string, number>("BD", 525);
  const resTuple = createArrayWithTuple<string, User>("BD", {
    id: 63,
    name: "Joy",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "next level";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({ name: "Joy", devType: "NLWD" });
  const student2 = addCourseToStudent({
    name: "Unknown",
    devType: "NLWD",
    hasWatch: "apple",
  });

  //
}
