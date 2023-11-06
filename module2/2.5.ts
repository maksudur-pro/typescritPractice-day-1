{
  //

  // function with generics

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("bangladesh", 22);

  const createArray = (param: string) => {
    return [param];
  };

  const result1 = createArray("bangladesh");

  const resGeneric = createArrayWithGeneric<string>("bangladesh");
  //   const resGeneric = createArrayWithGeneric<boolean>(true);

  interface User {
    id: number;
    name: string;
  }

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "mr. pashan",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "mr. x",
    devType: "Next level web dev",
    age: 23,
  });

  const student2 = addCourseToStudent({
    name: "mr. Y",
    devType: "Next level web dev",
    age: 23,
    hasWatch: "apple watch",
  });

  //
}
