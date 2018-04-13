import React from "react";

const InnerThing = () => {
  return <p>content</p>;
};

const Thing: React.SFC<{}> = () => {
  return <InnerThing className="stylish" />;
};

export default Thing;
