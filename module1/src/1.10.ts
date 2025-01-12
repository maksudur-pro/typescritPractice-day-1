{
  //
  // Union types
  //   type FrontendDeveloper = "fakibajDeveloper" | "juniorDeveloper"; // string literal type
  //   type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";
  //   type Developer = FrontendDeveloper | FullstackDeveloper;
  //   const newDeveloper: Developer = "fakibajDeveloper";
  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "B+" | "O-";
  //   };
  //   const user1: User = {
  //     name: "Joy",
  //     gender: "male",
  //     bloodGroup: "O+",
  //   };

  //  Intersection types

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["html", "css", "express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
  console.log(fullstackDeveloper);
  //
}
