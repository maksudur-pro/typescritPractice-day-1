{
  //

  const addCourseToStudent = <
    T extends {
      id: number;
      name: string;
    }
  >(
    student: T
  ) => {
    const course = "Next level web development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 21,
    name: "mr. x",
    devType: "Next level web dev",
    age: 23,
  });

  //   const student3 = addCourseToStudent({ emni: "emni" });

  const student2 = addCourseToStudent({
    id: 22,
    name: "mr. Y",
    devType: "Next level web dev",
    age: 23,
    hasWatch: "apple watch",
  });

  //
}
