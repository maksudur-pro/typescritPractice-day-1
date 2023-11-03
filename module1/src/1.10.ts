{
  //

  //  Union types

  //   type FrontendDeveloper = "fakibajDeveloper" | "juniorDeveloper";
  //   type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";

  //   type Developer = FrontendDeveloper | FullstackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "A+" | "AB+";
  //   };

  //   const user1: User = {
  //     name: "Joy",
  //     gender: "male",
  //     bloodGroup: "O+",
  //   };

  // Intersection types

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["html", "css", "express"],
    designation1: "Frontend developer",
    designation2: "Backend developer",
  };

  //
}
