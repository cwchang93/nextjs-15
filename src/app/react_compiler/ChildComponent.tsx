import React from "react";
import { useEffect } from "react";

const ChildComponent = ({ name }: { name: string }) => {
  "use memo";
  useEffect(() => {
    console.log("in child");
  });

  return (
    <div>
      <div>Child Component</div>
      Name: {name}
    </div>
  );
};

// export default React.memo(ChildComponent);
export default ChildComponent;
