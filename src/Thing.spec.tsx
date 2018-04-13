import React from "react";
import Thing from "./Thing";

describe("Test the thing", () => {
  it("uses the thing", () => {
    expect(<Thing />).toBeDefined();
  });
});
