{
  //  Constraints in typescript

  const addCourseToStudent = <
    T extends {
      id: number;
      name: string;
      email: string;
    }
  >(
    student: T
  ) => {
    const course = "next level";

    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 50,
    name: "BCF",
    email: "k@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent({
    id: 5,
    name: "Joy",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 22,
    name: "Unknown",
    email: "y@gmail.com",
    devType: "NLWD",
    hasWatch: "apple",
  });

  //
}
